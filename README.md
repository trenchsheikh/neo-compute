# Neo Compute

A responsive compute intelligence and agent-infrastructure platform, with read-only live Vast.ai offers via a server-side Vercel function. No invented market data. Live purchases, x402 settlement and MCP deployment are future roadmap items.

## Install
```bash
npm install
npm run check
npm run build
npm run dev
```

## Vercel configuration
Add `VAST_API_KEY` in Vercel environment variables to enable real offers. The site works without it, but marks offers as disconnected. No `VITE_` prefix; secret remains server-side. Local live API testing uses `vercel dev`. Frontend: React, TypeScript, Vite, Lucide. API: Vercel Functions, Vast.ai. Open SDK: https://github.com/trenchsheikh/neo-compute-public

## Scope & safety
Provider offers are informational, not guaranteed bookings. Payment, automated purchasing, backends for history and wallet provisioning are not implemented. Check supplier data licensing terms before redistributing prices. Never expose cloud credentials in client bundles.
