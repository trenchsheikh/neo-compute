# Neo Compute — Production Website Copy
**Editorial copy pack, 27 October 2026**
**Scope:** textual content for the upcoming redesign. It describes present capabilities accurately; planned capabilities are labelled.

## Brand

**Brand:** Neo Compute
**Category:** Agent-native compute discovery and intelligence
**One-line:** The intelligence layer for computing power.
**Mission:** Make compute easier to find, compare and integrate, for developers and AI agents.
**Voice:** confident, precise, welcoming, pragmatic and technical when necessary. Short headlines, no crypto hype, no invented adoption numbers.
**Preferred verbs:** Discover, Compare, Inspect, Integrate, Build.
**Avoid:** "Instant GPU booking", "Pay anyone with crypto", "All cloud providers", "First of its kind", "Deep liquidity", "Live x402 checkout" until verified.

## 1. Homepage `/`

**SEO title:** Neo Compute | GPU Discovery and Agent Integration
**SEO description:** Discover provider-sourced GPU offers, compare compute pricing and integrate read-only GPU search into AI agents using MCP, Python, TypeScript and OpenAPI.

**Eyebrow:** THE COMPUTE INTELLIGENCE LAYER
**H1:** The world runs on compute. Find yours.
**Body:** Neo Compute helps developers and AI agents discover GPU capacity, compare provider-reported prices and access compute data through simple, open developer tools.
**Primary CTA:** Explore compute
**Secondary CTA:** Connect your agent
**Tertiary text link:** Explore the API
**Trust note:** Read-only discovery. Live offers depend on connected providers.

**Four factual capability chips:**
- Provider-sourced GPU offers
- Python & TypeScript
- Local MCP server
- OpenAPI-first

**Flagship feature eyebrow:** A CLEARER VIEW OF COMPUTE
**Headline:** One interface. Better compute decisions.
**Body:** Find GPU offers using consistent price units and source details. Compare the hardware, region and instance cost behind every listing, then continue directly with the provider.
**CTA:** Open GPU Explorer

**Product grid heading:** Everything you need to understand compute.
**Product card — Explorer:** See the offers behind the numbers. Search supported GPU models and inspect available provider-reported pricing. CTA: Explore GPUs. Status: Connected provider required.
**Product card — Agent Tools:** The compute tools your agent can understand. Bring GPU discovery into your own agent with MCP or the open SDKs. CTA: Connect an agent. Status: Available locally.
**Product card — Market Intelligence:** Understand the economics behind GPU supply. Explore rental pricing, compute indices and the markets emerging around AI infrastructure. CTA: Understand compute markets. Status: Informational.
**Product card — Advanced Data:** A deeper view is on the way. Historical series, alerts and richer source comparisons are being designed. CTA: See the roadmap. Status: Planned.

**How it works — heading:** Compute discovery in four clear steps.
1. **Search:** Choose the hardware your workload needs.
2. **Compare:** Review available provider-reported rates and specifications.
3. **Inspect:** Check units, source and observation time.
4. **Continue:** Open the original supplier listing to confirm terms and availability.

**SDK section — eyebrow:** BUILD WITHOUT BORDERS
**Heading:** Your stack. Your tools. One compute API.
**Body:** Build with TypeScript or Python, connect a compatible AI client through local MCP, or use HTTP and OpenAPI from the language you already know.
**CTA:** Browse developer integrations

**Market insight feature heading:** A new market is forming around compute.
**Body:** GPU rental prices vary by provider, location and hardware grade. Neo helps make those distinctions visible. Our market pages explain these prices and reference emerging compute benchmarks without implying that Neo operates a trading exchange.
**CTA:** Explore market intelligence

**Final CTA heading:** Less time looking for compute. More time building.
**Body:** Start with open discovery tools, then bring compute intelligence into your own applications and agents.
**CTA:** Explore the platform

## 2. Products `/products`

**Title:** Everything around compute, connected.
**Description:** Explore today's discovery and developer tools, alongside the infrastructure we're building toward. Each product clearly states what is available.
**Card status vocabulary:** Available / Informational / Preview / Planned.
**Footnote:** Feature availability may depend on connected providers. Purchasing, stablecoin settlement and hosted MCP are not yet available.

## 3. Workspace `/app`

**Eyebrow:** COMPUTE WORKSPACE
**H1:** Your compute command centre.
**Description:** Search GPU listings, compare prices and inspect the underlying source data—all in one focused workspace.
**Topbar source state:** Source connected · Observed {timestamp} / Source not configured / Source temporarily unavailable.
**Summary tiles:** Supported GPU models / Connected sources / Offers returned / Latest observation.
**Data section heading:** Available compute offers
**Subtitle:** All prices are source-reported and may change before you rent.
**Actions:** Explore offers / Compare selected / View source / Reset filters / Export current results (if implemented).
**Filters:** GPU model / Provider / Region / Sort: Lowest GPU-hour price / Highest GPU-hour price.
**Table labels:** Provider / GPU model / GPU count / Location / Price per GPU-hour / Price per instance-hour / Source.
**Compare panel title:** Compare selected offers
**Compare helper:** Comparison is limited to the information returned by each provider. Hardware tiers, reliability and rental terms may differ.
**Empty-state H2:** Nothing to compare yet.
**Empty-state text:** Search a GPU model, then add offers to compare their reported specifications and costs.
**No-source H2:** Connect your first data source.
**No-source text:** This deployment has no live provider connection. Configure a supported source to see real GPU offers.
**Error H2:** This provider couldn't be reached.
**Error text:** Your last search wasn't completed. Retry or check the source status; we won't show made-up results.
**Source disclaimer:** Listing data is informational. Confirm pricing and availability with the original provider before renting.
**Disabled purchase message:** Booking and payment are not yet available through Neo.

## 4. Explorer `/app/explore`

**Title:** Find the compute that fits.
**Description:** Start with hardware. Narrow by location, price and provider details. Inspect every result before you choose.
**Result annotation:** Price per GPU-hour is not always the same as the total cost of a machine.
**No-results:** No offers match those filters. Try a different GPU model or clear your search.
**CTA on offer:** View at provider
**Data quality note:** Provider-reported listings are not guaranteed reservations.

## 5. SDK directory `/sdk` and Integrations `/app/integrations`

**H1:** Build in the language you prefer.
**Description:** Neo exposes a small, language-neutral discovery API. Use a native client or connect your agent through the open MCP tools.
**TypeScript:** Typed discovery for Node.js and modern web apps. CTA: View TypeScript SDK.
**Python:** A simple client for ML workflows, scripts and AI systems. CTA: View Python SDK.
**MCP:** Search and compare compute from compatible AI tools. Currently runs as a local stdio server. CTA: Connect with MCP.
**OpenAPI:** Generate an API client in your preferred language from the canonical specification. CTA: Open API schema.
**Go:** Read a minimal native HTTP example. CTA: View Go example.
**cURL / HTTP:** Use the same JSON endpoint from almost any language. CTA: Copy request.
**SDK publishing note:** SDK source is open. Package registries are not yet publishing official Neo packages; use the source setup instructions.

## 6. For agents `/for-agents` and Connect `/connect`

**H1:** Give your agent a better way to find compute.
**Description:** Add Neo's read-only search and price comparison tools to your agent workflow. No wallet access or automated spending is required.
**Step 1:** Choose MCP, Python, TypeScript or standard HTTP.
**Step 2:** Connect to the read-only API.
**Step 3:** Search and compare provider-reported GPU offers.
**Step 4 (roadmap):** Budgeted procurement and stablecoin checkout, once supported supplier services are available.
**CTA:** Copy MCP configuration
**Secondary CTA:** View agent examples
**Security callout:** Neo does not currently rent GPUs, hold funds or execute trades. Always confirm source terms before provisioning external capacity.

## 7. Documentation `/docs`

**Title:** Docs that get you building.
**Description:** Go from the first API request to a working agent integration, with contracts and examples designed for real development environments.
**Sections:** Quickstart / API reference / TypeScript / Python / MCP / Other languages / Errors / Source units / Security.
**API intro:** Get provider-reported offers for supported GPU models through one read-only endpoint.
**Endpoint:** GET /api/offers?gpu=H100
**Error copy:** Check `connected` before using offers. Missing credentials return an explicit disconnected state; invalid filters and provider errors use distinct status codes.
**Copy button state:** Copy code → Copied.
**Next link:** Explore the public SDK.

## 8. Market intelligence `/markets`

**H1:** Understand the price of compute.
**Description:** GPU computing is not a single, identical product. Hardware, geography, uptime and rental terms all shape price. Explore the concepts and benchmarks behind the emerging market.
**Spot section:** The price of renting compute today.
**Index section:** A benchmark representing defined GPU rental observations.
**Derivatives section:** Financial contracts referencing compute-related prices; external execution and regulation are separate from Neo's read-only information.
**Footnote:** Neo does not offer derivative execution or investment advice.

## 9. Technology `/technology`

**H1:** Open tools. Clear boundaries.
**Description:** Neo combines a TypeScript application, sourced compute APIs, an open multi-language SDK and local MCP tools. Planned integrations for billing and provisioning remain separate until they can be securely operated.
**Data principles:** Preserve source identity. Show exact price units. Surface errors clearly. Don't fabricate unavailable data.

## 10. Pricing `/pricing`

**H1:** Start exploring for free.
**Free card:** Browse the public platform and read the developer integration guides.
**Advanced products card:** In development. Historical data, deeper integrations and programmable payments are planned. Pricing has not been announced.
**CTA:** Open the workspace
**Disclaimer:** No paid subscription or checkout is currently offered.

## 11. About `/about`

**H1:** Make compute easier to navigate.
**Description:** AI development depends on access to computing infrastructure. But supply is spread across providers, regions and hardware categories. Neo is building an open discovery layer that helps developers and agents work with that fragmented landscape.

## 12. Status `/status`

**H1:** Know what is connected.
**Description:** See which discovery features are configured, which interfaces are available and which capabilities are still in development.
**Statuses:** Operational / Source not configured / Upstream unavailable / Planned.
**Note:** Successful loading of the website does not imply that live provider data, provisioning or payments are active.

## 13. FAQ `/learn/compute-pricing`

**What is a GPU-hour?** A unit representing use of one GPU for one hour. A multi-GPU instance may have a higher total hourly charge.
**Does Neo rent GPUs?** Not currently. Neo helps users discover provider-reported offers and continue at the original supplier.
**Can my AI agent use Neo?** Yes, through the documented read-only API, TypeScript/Python clients or local MCP tools.
**Can I pay with USDC?** Not through Neo today. Stablecoin payments and procurement are planned for a future version.
**Do all H100 GPUs cost the same?** No. Cloud tier, hardware variant, location, capacity, reliability and provider commercial terms can vary.
**Does Neo offer GPU perpetuals?** No. Neo offers informational pages about compute markets but does not execute financial derivatives.

## 14. Footer copy

**Neo Compute — The intelligence layer for computing power.**
Products / Developers / Agents / Resources / About / Status.
Legal text: "Provider-reported data is informational, may be delayed, and does not guarantee rental availability, pricing or performance. No trading, custody, or checkout service is available in this release."

## 15. Search-focused metadata examples

- `/`: Neo Compute | GPU Discovery and Agent Integration — Compare source-reported GPU offers and integrate compute discovery with open APIs, Python, TypeScript and MCP.
- `/app/explore`: GPU Explorer | Neo Compute — Search supported GPU models and inspect provider-reported rental offers with explicit hourly units and source details.
- `/sdk`: Compute SDKs | Neo Compute — Developer integrations for GPU discovery using TypeScript, Python, MCP, Go examples and OpenAPI.
- `/for-agents`: AI Agent GPU Discovery | Neo Compute — Connect an AI agent to read-only GPU search and comparison tools through MCP or a language SDK.
- `/docs/api`: Compute Discovery API Documentation | Neo Compute — Read the GPU offers endpoint, supported models, response formats and error handling.
- `/markets`: GPU Compute Markets Explained | Neo Compute — Understand GPU rental spot prices, compute indices and the difference between discovery data and trading venues.

This content is written for genuine users and search accessibility, not a promise of ranking or AI answer inclusion.
