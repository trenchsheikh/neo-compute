# Neo Compute Web — Next.js

The redesigned public Neo Compute platform and GPU intelligence workspace. The previous Vite application remains at repo root as a fallback until the Next.js migration is verified.

## Stack

Next.js 16, React 19, TypeScript, CSS design tokens, Lucide, React Icons; server-side Vast.ai adapter; public TypeScript/Python/OpenAPI/MCP companion tools.

## Setup

```sh
cd apps/web
npm install
npm run typecheck
npm run build
npm run dev
```

Add `VAST_API_KEY` to the server environment only to access actual read-only offers. Without it, GPU data pages show an explicitly unconfigured state.

## Main routes

Marketing: `/`, `/products`, `/for-agents`, `/sdk`, `/markets`, `/technology`, `/pricing`, `/about`, `/status`.
Workspace: `/app`, `/app/explore`, `/app/compare`, `/app/integrations`, `/app/agents`.
Documentation: `/docs`, `/docs/api`, `/docs/mcp`, `/docs/errors`, `/docs/sdk/[language]`.
API: `/api/offers?gpu=H100`, `/api/capabilities`.
Discoverability: `/llms.txt`, `/.well-known/neo-compute.json`, `/robots.txt`, `/sitemap.xml`.

## Release

Configure Vercel Framework to **Next.js**, Root Directory to **apps/web**, Output Directory to **framework default**. Run CI and preview smoke tests before switching the existing main production project from Vite.

## Data & agent safety

All prices are provider-reported, not reservations. `hourly` is per GPU-hour and `instanceHourly` is per entire instance-hour. Comparison choices are stored in browser localStorage; no customer accounts are implemented.

**Not supported:** GPU purchase/provisioning, wallets, USDC/x402 payments, hosted remote MCP, historical price dataset, or derivative execution. The SDKs and local MCP tools only read provider data.

Public SDK: https://github.com/trenchsheikh/neo-compute-public
