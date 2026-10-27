# Neo Compute engineering principles

## Stack selection
Use **TypeScript** for the web application, API adapters and shared contracts. React + Vite are a good fit for an initially lightweight public product; keep the backend small. Do not migrate to Rust/Go just for performance claims when the largest latency is remote provider APIs.

Use **Python** for AI-agent and research integrations, plus **OpenAPI** as the public source of truth for additional language clients. Local MCP uses official Python tooling and stdio. A remote Streamable HTTP MCP server can be added once auth, rate limits and production observability are in place.

## Separation of concerns
- `src/lib/compute.ts`: typed frontend API boundary.
- `src/lib/products.ts`: explicit feature availability.
- `api/offers.js`: upstream Vast.ai adapter and normalisation. Credentials are server-side only.
- `api/capabilities.js`: machine-readable product capability discovery.
- Public repo: TS client, Python client, local MCP, OpenAPI and examples.

## Before real transactions
Require approved supplier procurement terms, account authentication, idempotent quote/order API, user-confirmed budgets, expiry times, refunds, termination, usage verification and audit logs. Stablecoin receipt alone cannot guarantee allocation of offchain hardware. x402 is a planned payment rail, not live production behaviour.

## Quality gates
Run typecheck and build. Introduce unit tests, runtime response validation, contract tests, accessibility tests, Vercel preview smoke checks and source-specific circuit breakers before charging users.
