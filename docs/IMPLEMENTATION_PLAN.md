# Neo Compute — Technical Refactor and Migration Plan
**Revision:** 27 October 2026
**Scope:** implementation plan, not a claim that Next.js has been deployed.

## 1. Recommendation and why

- Keep **TypeScript** as the primary implementation language for the website and the API; it reduces context switching, has robust typing across API contracts and supports maintainable web application code.
- Move marketing pages, docs and app shell from the current **React/Vite SPA** to **Next.js App Router** when the preview branch is ready. This supports route-level server-rendered HTML and metadata while preserving interactive client components. Do not rush a replacement by breaking a working production app.
- Keep **Python** a first-class client for AI users; keep TypeScript/JavaScript first-class for web tooling. Source all contracts from an **OpenAPI 3.1** spec and maintain working HTTP, cURL and Go examples. Generate additional language clients when adoption justifies it.
- Retain the current local Python MCP stdio server. Evaluate **remote Streamable HTTP MCP** separately with authentication, rate limits, abuse controls, Origin checks and explicit version compatibility (the 2026-07-28 MCP revision differs from older HTTP transport revisions).
- Put high-integrity data and provider connections before stablecoin purchase flows. Base/USDC/x402 are a future transaction integration, not an excuse to custody assets prematurely.

## 2. Verified current starting point (27 Oct 2026)

- Main repo: Vite, React 18, React Router, TypeScript; frontend file `src/main.tsx` and grouped route file `src/pages.tsx`.
- Main live backend: `api/offers.js` (Vast.ai credential-gated, read-only), `api/capabilities.js`.
- App data boundary: `src/lib/compute.ts`; feature availability catalogue: `src/lib/products.ts`.
- Public repo: TypeScript client, Python `httpx` client, local Python MCP tools, OpenAPI 3.1 contract, Go/HTTP examples.
- No commercial multi-provider aggregation, hosted MCP, stablecoin checkout, provisioning, durable history or derivatives execution.

## 3. Proposed clean repository structure

```text
neo-compute/
  app/
    (marketing)/
      page.tsx
      products/page.tsx
      for-agents/page.tsx
      sdk/page.tsx
      markets/page.tsx
      technology/page.tsx
      pricing/page.tsx
      about/page.tsx
      status/page.tsx
    (workspace)/
      app/layout.tsx
      app/page.tsx
      app/explore/page.tsx
      app/compare/page.tsx
      app/integrations/page.tsx
      app/agents/page.tsx
    docs/
      page.tsx
      api/page.tsx
      sdk/[language]/page.tsx
      mcp/page.tsx
    api/
      offers/route.ts
      capabilities/route.ts
    robots.ts
    sitemap.ts
    layout.tsx
    globals.css
  components/
    marketing/
    workspace/
    ui/
    sdk/
    providers/
  lib/
    contracts/
    providers/
      vast.ts
      provider.interface.ts
    api/
      offers.ts
    security/
      validation.ts
    seo/
      metadata.ts
      schemas.ts
    feature-status.ts
  content/
    docs/
  public/
    llms.txt
    .well-known/neo-compute.json
    logos/
  tests/
    unit/
    contracts/
    e2e/
  .env.example
  next.config.ts
  package.json
```

Public SDK stays separate:

```text
neo-compute-public/
  openapi/neo-compute.yaml
  src/index.ts
  python/
    pyproject.toml
    src/neo_compute/
      client.py
      mcp_server.py
  examples/
    agents/
    curl/
    go/
  docs/
  .github/workflows/
```

No duplicated handwritten API schema definitions if generation can enforce consistency.

## 4. Phased migration — feature continuity

**Phase 0: Freeze and baseline**
- Capture screenshots and routes on present Vite production, including light/dark mobile.
- Record existing response JSON and `/api/offers?gpu=H100` error/connection paths.
- Snapshot deployment version and document rollback path.
- Establish component, metadata and data source contracts.

**Phase 1: Design system and editorial pages**
- Initialise Next.js App Router in a feature branch, with a design tokens file.
- Implement fonts with `next/font` and accessible reusable components (shadcn/ui primitives selectively).
- Add custom original hero artwork and keyboard/touch mega nav.
- Rebuild public pages as server components wherever possible; reserve client islands for switches/carousels.

**Phase 2: Data-preserving workspace migration**
- Port `api/offers.js` to Next route handler without changing response contract.
- Introduce a provider adapter interface + validated offer normalisation.
- Build real explorer table, compare drawer, source provenance and valid deep links.
- Keep unauthenticated read-only experience; defer customer account pages until actual identity infrastructure exists.

**Phase 3: Developer docs / SDK UX**
- Build SDK selection grid with locally hosted, properly licensed logos + accessible fallback.
- Show exact source install examples. Neither SDK is claimed published to npm/PyPI.
- Docs use the canonical OpenAPI source and server-rendered MDX.
- Expose local MCP setup, transports and safety notes accurately; all copy buttons require working clipboard handlers.

**Phase 4: Discovery and SEO**
- Canonicals, title/description/OG tags and social preview.
- `app/sitemap.ts`, `app/robots.ts`, stable `llms.txt` (helpful but not required for AI search).
- Only evidence-backed JSON-LD `SoftwareApplication`, `SoftwareSourceCode`, `WebAPI`, `TechArticle`; structured data mirrors visible content.
- In Search Console, submit sitemap and measure index coverage / query relevance. No guarantee of search or LLM ranking.

**Phase 5: Production release**
- Lint, typecheck, compile, unit, contract and accessibility tests.
- E2E flows: navigation, menu keyboard, filter/sort/compare, disconnected provider, connected mocked provider, SDK tabs, copy config, 404, theme, dark/light.
- Deploy preview under Darkbet Vercel project and check accessibility on mobile/desktop.
- Switch production only after a passing preview; retain last known good deployment for rollback.
- Confirm new app doesn't expose `VAST_API_KEY`, doesn't cache personalized content publicly and doesn't break `/api/offers`.

## 5. Contract and adapter design

Canonical domain models:

```ts
type PriceUnit = 'USD_PER_GPU_HOUR' | 'USD_PER_INSTANCE_HOUR';
type SourceStatus = 'connected' | 'unconfigured' | 'stale' | 'upstream_error';
type Offer = {
  id: string;
  source: 'vast';                 // widen when real adapters exist
  provider: string;
  gpuModel: string;
  gpuCount: number;
  unitPriceUsd: number;
  instancePriceUsd: number;
  region: string | null;
  vramGb: number | null;
  observedAt: string;
  sourceUrl: string;
};
```

Keep **backward compatibility** on existing API keys `hourly`, `instanceHourly`, etc. until a versioned /v2 migration is documented. Validate upstream data at runtime. Distinguish instance-hour prices from GPU-hour prices and ensure GPU count is nonzero.

Provider adapter interface:

```ts
interface ComputeProvider {
  id: string;
  searchOffers(input: {gpu: string; signal: AbortSignal}): Promise<Offer[]>;
  health(): Promise<SourceStatus>;
}
```

Add new adapters only after terms, authentication and provenance are verified. Cache snapshots briefly and stamp `observedAt`. Don't report a real-time market unless a source is actually connected.

## 6. Agent, security and payments roadmap

**Current:** local stdio MCP; TypeScript/Python SDK; HTTP/OpenAPI; public read-only search.

**Remote MCP milestone:** authenticated Streamable HTTP endpoint, per-tool policies, Origin validation, transport-version negotiation, invocation quotas, tracing, request-size limits, response schemas, typed errors, abuse prevention, load tests. No arbitrary code execution tools.

**Onchain milestone (not part of redesign MVP):** merchant onboarding and provider agreements → metered API access → x402 USDC quote/receipt → approved purchasing → spending limits, budget reservation, idempotent resource allocation, instance TTL/autoshutdown, refunds, reconciliation and usage proof. Chain choice should be justified by supported stablecoin rails, reliability, cost, and merchant tools; Base is a candidate, not a product promise.

**Security baseline:** secret vault/environment separation, no `NEXT_PUBLIC_` prefixes for provider credentials, rate limiting, output escaping, strict upstream URL allowlists, basic content security policy, runtime input validation, no open redirects to arbitrary listings, retries with capped backoff, API versioning, API deprecation policy.

## 7. Quality gates

| Gate | Test |
| --- | --- |
| Static | `tsc --noEmit`, ESLint, package audit |
| API contract | OpenAPI schema checks + fixtures for configured, missing-key, bad GPU and timeout |
| Unit | price normalisation, sorting, filtering, stale detection, source URL sanitisation |
| E2E | Playwright navigation, filters, compare, SDK copy, keyboard and theme |
| Accessibility | axe, keyboard-only navigation, reduced motion, color contrast |
| SEO | inspect actual server HTML, structured data, sitemap/robots/canonical |
| Safety | secrets not bundled, no accidental payment or fake price states |
| Deployment | Vercel preview READY, HTTP smoke tests, response provenance, rollback available |

## 8. Team and effort order

**First two iterations:** design system + marketing pages and navigation; preserve original API.

**Next two iterations:** workspace and comparison flows, then SDK/docs hub and SEO.

**Final iteration:** tests, screenshot review, performance and safe production cut-over.

Do not build customer auth, billing subscriptions, charting libraries or backend database before a validated feature demands them. Do not automatically deploy speculative purchasing code to main. 
