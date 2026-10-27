# Neo Compute
**The intelligence layer for computing power.**

Neo Compute is an agent-native, read-only GPU discovery platform. Developers can compare provider-sourced offers and connect applications or AI agents using a simple API, open SDKs and local MCP tooling. Neo doesn't own GPUs or invent market prices.

**Website:** [neo-compute.vercel.app](https://neo-compute.vercel.app) · **Public SDK:** [neo-compute-public](https://github.com/trenchsheikh/neo-compute-public) · **Documentation:** [neo-compute.vercel.app/docs](https://neo-compute.vercel.app/docs)

## Product

| Product | What it does | Status |
| --- | --- | --- |
| GPU Explorer | Search supported GPU models, filter real offers, inspect USD/GPU-hour vs USD/instance-hour, export CSV | Read-only, source required |
| Compare | Compare up to 3 offers within the same browser | Available with real data |
| Compute Workspace | Provider connection, source freshness, quick access to discovery and integrations | Available |
| Integration Centre | TypeScript, Python, MCP, OpenAPI, Go, HTTP examples | Available |
| Agent Tools | Local Python MCP stdio `search_compute` and `compare_compute` | Read-only |
| Market Intelligence | Explanation of rental rates, indices and external compute markets | Informational |
| Payments / Procurement | USDC/x402, supplier rental deployment, trading and historical data | **Not implemented** |

Live offers depend on a configured Vast.ai provider key. There are no demo offers misrepresented as real quotes.

## Stack

- **Next.js 16, React 19, TypeScript**: server-rendered marketing, workspace and documentation.
- **CSS design tokens**: responsive editorial website and information-dense workspace, dark/light themes.
- **Vercel serverless route handlers**: allowlisted GPU search and machine-readable capability discovery.
- **Public SDK repository**: independent TypeScript/Python libraries, OpenAPI specification and a local MCP tool server.

One application lives at the **repository root**. There is no duplicate frontend, monorepo configuration or secondary build system.

## Local setup

Requires Node.js 22+ and npm.

```bash
git clone https://github.com/trenchsheikh/neo-compute.git
cd neo-compute
npm install
npm run typecheck
npm run build
npm run dev
```

Create a local `.env.local` only if you have a private provider key:

```dotenv
VAST_API_KEY=YOUR_PRIVATE_KEY
```

The key is **server-side only**. Never commit the value or prefix the variable with `NEXT_PUBLIC_`.

## Environment and Vercel

| Variable | Required | Use |
| --- | --- | --- |
| `VAST_API_KEY` | Only for live offers | Server-side Vast.ai read-only API |
| `NEXT_PUBLIC_SITE_URL` | Optional | Public URL for canonical, sitemap and OpenGraph metadata |

Vercel settings: **Team:** darkbet · **Project:** neo-compute · **Framework:** Next.js · **Root:** project root · **Output:** framework default · **Production branch:** main.

CI runs `npm run typecheck`, `npm run build` and route/API smoke tests on push and pull request.

## API for any programming language

```http
GET /api/offers?gpu=H100
Accept: application/json
```

Supported GPU filters: `H100`, `H200`, `A100`, `B200`, `L40S`, `RTX_4090`, `RTX_5090`, `A6000`.

Disconnected response, when the server provider key is unavailable:

```json
{"connected":false,"provider":"Vast.ai","offers":[],"notice":"Live offers require a server-side VAST_API_KEY. No sample prices are displayed."}
```

A connected response includes source-reported `offers` and `observedAt`. The `hourly` and `instanceHourly` fields differ: one is **per GPU-hour**, the other is **per instance-hour**.

`GET /api/capabilities` exposes currently available integrations and explicitly identifies unimplemented functions. There is no hosted remote MCP endpoint in this version.

## Architecture

```text
app/                  Server-rendered Next.js pages and read-only API routes
components/           Site and workspace components
lib/                  Typed compute contract, marketing content and snippets
public/               Agent discovery documents and static assets
scripts/smoke.mjs     HTTP route and API acceptance tests
.github/workflows/    CI typecheck, build and smoke test
docs/                 Brand/design and editorial references
```

### Security principles

- Live provider credentials never reach browser bundles.
- GPU filters are allowlisted; supplier links are restricted to approved hosts in the workspace.
- The API surfaces disconnected or upstream-error states rather than fake pricing.
- Source observations do not constitute bookings or enforceable price quotes.
- There is no wallet signing, custody, instance provisioning, order execution or autonomous spending.

## Contributing and SDKs

See [the public repository](https://github.com/trenchsheikh/neo-compute-public) for TypeScript and Python client sources, OpenAPI, local MCP setup and Go/HTTP examples. The language SDKs are not published to npm or PyPI yet.

Before opening a pull request, run:

```bash
npm run typecheck
npm run build
```

CI also runs the complete smoke suite on a running Next.js server.

## Product references

- [Visual direction](docs/REDESIGN_SPEC.md)
- [Production copy](docs/WEBSITE_COPY.md)

**Neo Compute · Find the computing power you need, with source-aware intelligence.**

## GitHub → Vercel deployment workflow

The `darkbet/neo-compute` project is connected to the repository's `main` branch. Each push should automatically request a production deployment from Vercel's Git integration; **do not create a second manual deployment** for the same commit. A successful GitHub Actions build is a separate check and does not mean the Vercel deployment itself is live.

If a push does not deploy, inspect the latest deployment SHA and status in Vercel first. Account-level deployment quotas, ignored-build settings, and Git integration permissions can prevent an automatic deployment, even when the repository's CI passes.
