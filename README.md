# Neo Compute — Next.js Redesign

**Primary implementation:** [apps/web](./apps/web) — Next.js 16 + React 19 + TypeScript.

This repository now includes the completed premium marketing frontend, detailed GPU intelligence workspace, read-only API, agent onboarding, multi-language integration directory, SEO resources and server-rendered technical documentation. The previous Vite project remains in the repository root as a **production fallback until Vercel cutover**.

**Current release status (27 October 2026):** GitHub Actions [typecheck, production build, and route/API smoke tests](./.github/workflows/neo-web-ci.yml) pass. The Next.js version is **not yet the production deployment** because the Darkbet Vercel team reached its daily API deployment quota. The existing site remains available at [neo-compute.vercel.app](https://neo-compute.vercel.app) and continues to use Vite until migration is completed.

**Start development:** `cd apps/web && npm install && npm run dev`.

**Vercel target settings:** Framework **Next.js**; Root Directory **apps/web**; Output Directory **framework default**. Enable live GPU offers with server-only `VAST_API_KEY`.

**Public agent SDK:** [neo-compute-public](https://github.com/trenchsheikh/neo-compute-public) (TypeScript, Python, OpenAPI, local MCP, Go/HTTP examples).

**What is live in the new code:** provider-backed read-only GPU search and comparison, CSV export, source status, SDK and MCP instructions. **Not live:** stablecoin checkout, GPU provisioning, derivatives execution, remote hosted MCP and historical series.

For the complete new implementation details, see [apps/web/README.md](./apps/web/README.md). The earlier README and planning documents below are retained as development history.

---

# Neo Compute

**Compute intelligence for developers, infrastructure teams, and autonomous agents.**

Neo Compute helps you discover GPU offers, understand provider-reported prices, and connect applications to compute market data. It is designed as an open access layer over existing infrastructure—not another GPU cloud.

[Explore app](https://neo-compute-darkbet.vercel.app) · [Public TypeScript SDK](https://github.com/trenchsheikh/neo-compute-public) · [Developer documentation](https://neo-compute-darkbet.vercel.app/docs)

> **Current release — discovery MVP.** The UI and read-only GPU discovery API are implemented. Live GPU offers require a server-side Vast.ai credential. Stablecoin checkout, GPU provisioning, MCP tools, historical data, and derivatives trading are **not live**. The production site is subject to deployment status and access controls.

## What you can do

| Area | Capability | Status |
| --- | --- | --- |
| GPU Explorer | Filter supported GPU families, search and sort sourced offers | Built; live offers need `VAST_API_KEY` |
| Compute Markets | Read about rental pricing, benchmarks, and external markets | Informational |
| Agents | Explore typed machine-readable access and planned automation | Read-only SDK available |
| API | `GET /api/offers?gpu=H100` on Vercel | Implemented |
| Documentation | API schema, architecture, environment, limitations | Available in `/docs` |
| Theme | Responsive light/dark interface | Available |
| USDC / x402 | Agent payments and procurement | Planned, not enabled |
| Execution | Actual GPU rentals or compute perpetual orders | Not supported |

## Quick start

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/trenchsheikh/neo-compute.git
cd neo-compute
npm install
npm run check
npm run build
npm run dev
```

Open the local URL printed by Vite. Frontend pages work without any keys. To test the serverless `/api/offers` endpoint locally, use **Vercel CLI** (`vercel dev`), because `vite dev` alone does not execute Vercel Functions.

### Environment

Copy `.env.example` as a reference. In **Vercel → neo-compute → Settings → Environment Variables**, set:

| Variable | Required? | Description |
| --- | --- | --- |
| `VAST_API_KEY` | For live prices | Private Vast.ai API key used only in `api/offers.js` |

Do **not** prefix the key with `VITE_` or commit it. No payment secrets or database credentials are required for the current build.

With no key, the API responds with a clearly marked disconnected state; no fictional prices are displayed.

## API for developers and AI agents

**Request**

```http
GET /api/offers?gpu=H100
Accept: application/json
```

Allowed GPU filters: `H100`, `H200`, `B200`, `A100`, `L40S`, `RTX_4090`, `RTX_5090`, `A6000`.

**Disconnected example**

```json
{
  "connected": false,
  "offers": [],
  "notice": "Add VAST_API_KEY to connect live GPU marketplace offers."
}
```

**Connected response shape** (structure only; values are not live quotes):

```ts
type GPUOffer = {
  id: string;
  gpu: string;
  provider: string;
  gpuCount: number;
  hourly: number;         // USD per GPU-hour
  instanceHourly: number; // USD per instance-hour
  region: string;
  memoryGb: number;
  link: string;
};

type OffersResponse = {
  connected: boolean;
  offers: GPUOffer[];
  observedAt?: string; // ISO 8601, when connected
  notice?: string;
  error?: string;
};
```

An unsupported GPU returns HTTP 400. Provider outages return HTTP 502. Provider observations are not a guarantee of availability, price, rental terms, or performance.

### Using the public SDK

The separately maintained [`neo-compute-public`](https://github.com/trenchsheikh/neo-compute-public) repository contains a small typed client, build instructions, and an example agent integration. Its package is **not published to npm** yet.

## Architecture

```text
React / Vite UI ──────────→ Vercel /api/offers
   │                             │
   │                             └── Vast.ai API (private server credential)
   │
   └── Public TypeScript SDK ───→ same read-only API contract

Future only: other clouds · history · MCP · x402 / USDC · purchase controls
```

- **Frontend:** React 18, TypeScript, React Router, Vite, Lucide icons.
- **Server:** Vercel Node.js serverless handler, allowlisted GPU input, bounded upstream request timeout.
- **Data:** Provider-reported listings, displayed with provenance and observation time.
- **Web3 direction:** EVM-first, with Base and USDC/x402 under evaluation; **no live onchain transactions** in this release.

## Agent integration guidelines

Agents should treat Neo as an **information source**, not an executor of spending or provisioning.

1. Query a supported GPU model, then check `connected` before consuming `offers`.
2. Compare `hourly` (per GPU) separately from `instanceHourly` (whole instance).
3. Treat regions and specifications as provider-reported and verify against the linked supplier before rental.
4. Do not interpret a provider link as a successful deployment.
5. Never pass wallet private keys or cloud provider secrets into prompts, URL query strings, or client-side bundles.

## Repository layout

```text
api/offers.js      # Server-side Vast.ai read-only adapter
src/main.tsx       # Routes, UI components and interactive screens
src/style.css      # Theme, typography, responsive layout
index.html         # App entry
vercel.json        # Vite framework and SPA routing
.env.example       # Documented configuration
```

## Roadmap

Planned work includes additional provider adapters, historical pricing with source audit trails, a dedicated MCP server, constrained USDC/x402 access, explicit purchase budgets, provider-approved instance provisioning, and billing reconciliation. None of these should be represented as production-ready until implemented and tested.

## Responsible use

Respect upstream provider terms, redistribution rights and rate limits. Never invent offers or market prices. Keep upstream credentials server-side. No custodial wallet, derivative-trading or agent auto-spend services are supplied by this repository.

## Contributing

Open a focused issue or pull request with a clear use case, reproduction steps and any relevant API response shape. Run `npm run check` and `npm run build` before requesting review. For shared developer libraries and integration examples, contribute to the [public SDK](https://github.com/trenchsheikh/neo-compute-public).

---

**Neo Compute** · Build on existing infrastructure. Make compute easier to discover.

## Design and implementation blueprints

The proposed frontend redesign and migration are **specifications**, not deployed UI changes:

- [Product and visual design — page by page](./docs/REDESIGN_SPEC.md)
- [Technical refactor and migration plan](./docs/IMPLEMENTATION_PLAN.md)
- [Finished website and dashboard copy](./docs/WEBSITE_COPY.md)

Migration should run through a preview branch with regression tests before replacing the current deployed app.
