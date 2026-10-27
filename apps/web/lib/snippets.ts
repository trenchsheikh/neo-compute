export const snippets={typescript:`import { NeoCompute } from './dist/index.js';

const neo = new NeoCompute({
  baseUrl: 'https://neo-compute.vercel.app'
});

const result = await neo.searchOffers({ gpu: 'H100' });
if (!result.connected) throw new Error(result.notice);
console.log(result.offers);`,python:`from neo_compute import NeoCompute

neo = NeoCompute('https://neo-compute.vercel.app')
result = neo.search_offers('H100')
if not result['connected']:
    print(result.get('notice', 'Source unavailable'))
else:
    print(result['offers'])`,http:`curl --fail-with-body -sS \\
  'https://neo-compute.vercel.app/api/offers?gpu=H100' \\
  -H 'Accept: application/json'`,mcp:`{
  "mcpServers": {
    "neo-compute": {
      "command": "neo-compute-mcp",
      "env": {
        "NEO_COMPUTE_BASE_URL": "https://neo-compute.vercel.app"
      }
    }
  }
}`,go:`client := &http.Client{Timeout: 10 * time.Second}
resp, err := client.Get("https://neo-compute.vercel.app/api/offers?gpu=H100")
if err != nil { panic(err) }
defer resp.Body.Close()
// Decode JSON and check connected before using offers.`,openapi:`openapi: 3.1.0
info:
  title: Neo Compute Discovery API
  version: 0.2.0
paths:
  /api/offers:
    get:
      operationId: searchComputeOffers
      summary: Search provider-reported GPU offers`};
