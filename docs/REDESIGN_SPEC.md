# Neo Compute — Product and Visual Redesign Specification
**Status:** implementation blueprint, not deployed UI changes
**Revision:** 27 October 2026
**References:** high-contrast editorial financial/infrastructure websites; original Neo components and illustrations required. Do not reproduce Injective's artwork, brand marks or page geometry.

## 0. Current product truth

- **Working:** responsive public website; server-side Vast.ai read-only offer adapter when `VAST_API_KEY` is set; TypeScript and Python client source; local Python MCP stdio tools `search_compute` and `compare_compute`; OpenAPI document; capability endpoint; light/dark theme.
- **Informational:** compute markets, GPU pricing education and links to external markets.
- **Not live:** remote MCP endpoint, second compute supplier adapter, persistent spot history, user accounts, subscriptions, x402/USDC, GPU procurement, GPU provisioning, order execution, liquidity and derivatives.
- Never represent a planned feature as launched, a sample price as live, or a third-party provider as a partner without permission.

## 1. Design outcome

Create a premium, legible computing-infrastructure brand with two related but distinct experiences:
1. **Marketing/editorial:** spacious dark canvas, understated pale typography, custom abstract compute sculpture, restrained violet/opal gradients and quiet animation. Inspiration is editorial financial infrastructure, not a clone of an existing website.
2. **Workspace/dashboard:** dense but approachable, visually hierarchical data table, filters, comparison drawer, source/freshness indicators, SDK connection flows and actionable empty states.

**Primary user journeys**
- Developer → GPU explorer → inspect sourced offer → open supplier listing.
- AI agent builder → SDK directory → choose TypeScript/Python/MCP/HTTP → copy working example → see machine-readable response.
- Researcher → compute market intelligence → understand underlier vs derivative → follow primary source.
- Returning user → workspace → GPU searches → compare up to three records → open supplier.
- First-time visitor → understand what Neo does in 5 seconds; status labels explain exactly what works.

## 2. Visual system

| Property | Direction |
| --- | --- |
| Core dark canvas | #09090D |
| Elevated cards | #13141B |
| Subtle panel border | #2D2D38 |
| Primary typography | #F5F3F0 |
| Secondary typography | #A6A5B2 |
| Primary interactive accent | #8978F7 (Neo violet) |
| Secondary analytical accent | #B8EBDA (cool mint) |
| Light canvas | #FAFAF8 |
| Light text | #17171D |
| Marketing display | Instrument Serif (editorial only, graceful not ornamental) |
| Interface/body | Geist or a similarly neutral sans serif |
| Numbers/quotes | Geist Mono or tabular numeral feature |
| Max page width | 1240px, twelve-column editorial grid |
| App workspace | 260px sidebar / fluid content / optional 340px inspector |
| Button shape | Pill with 999px radius; height 46–50px |
| Cards | 16–22px corner radius; low-elevation borders |
| Motion | 160–260ms transitions; reduced motion respected |

Typography: marketing display at 68–92px desktop / 43–54px mobile; marketing body 17–19px; dashboard primary titles 28–36px, supporting text 13–15px; dashboard numeric price 24–30px. Hero headline uses deliberate line breaks, not tiny decorative gradients. Always maintain WCAG AA contrast and visible keyboard focus. Avoid glassmorphism on every surface, overdone glow, and exaggerated skeuomorphic illustrations.

**Illustration direction:** produce an original abstract silicon monolith / converging modular GPU compute tiles, with subtle depth. Do not duplicate the reference site's hand/device, architectural renderings, coin columns, purple treatment, logo or stock photos. Until an original illustration is approved, use a code-driven CSS/SVG diagram that renders without external dependencies.

**SDK logo policy:** use recognisable permitted official language logos (TypeScript, Python, Go) or accessible text-based icons; verify redistribution licences; store compressed local SVGs in the repo and use explicit alt text. MCP/OpenAPI/cURL receive distinct labeled badges where official brand usage is ambiguous. No logo should silently imply an endorsement.

## 3. Global navigation

**Primary header:** Neo wordmark · Platform ▼ · Solutions ▼ · Developers ▼ · Resources ▼ · [Open app] CTA · theme toggle.

- Platform: Overview, Compute Explorer, Market Intelligence, Product Roadmap
- Solutions: For Developers, For AI Agents, For Researchers
- Developers: API Reference, TypeScript SDK, Python SDK, MCP, OpenAPI, HTTP examples
- Resources: About, Status, Technical Architecture
- Mobile: accessible disclosure menu; focus returns to trigger on close.
- Mega-menu: left rail of grouped links plus right panel of featured product/short explanation, keyboard and touch support. Delay close to prevent accidental dismissal. Escape closes; click outside closes. Never require hover to operate.

**Main footer:** Platform / Integrations / Resources / Company. Plainly state that live purchase, USDC settlement, and remote MCP are not yet available.

## 4. Routes and page-by-page design

### 4.1 Marketing home `/`
1. Minimal top navigation above original abstract visual.
2. Editorial hero: eyebrow, high-contrast display statement, three-line concise value proposition, primary CTA "Explore compute", secondary CTA "Connect your agent".
3. Narrow factual capability bar: "Read-only GPU discovery" / "TypeScript + Python" / "Local MCP tools" / "OpenAPI".
4. Two-column product feature: large purple-violet editorial panel, "One interface. Better compute decisions.", product screenshot or interactive workflow illustration.
5. "Everything connected to compute" four high-quality product cards with capability status.
6. "How it works": Query → Compare → Inspect → Act at provider.
7. SDK language selection with locally hosted official logos, no fake package installation commands.
8. Market intelligence/underlier educational feature.
9. Trust / responsible-data block — timestamp, provenance, unit normalisation, no mock price data.
10. Quiet CTA and substantial but structured footer.

### 4.2 Product index `/products`
Editorial introduction + grid with product icons, current status and 1-line capabilities. Status values: Available, Informational, Preview, Planned. Never use "LIVE" for unconfigured upstream source.

### 4.3 Workspace overview `/app`
Premium app shell: left nav (Overview, Explore GPUs, Compare, Integrations, Agent Setup, Documentation, Market Intelligence), top bar (breadcrumb, source state, light/dark), content.
- Lead block: "Your compute command centre" plus contextual explanation.
- Summary tiles: supported models (derived from allowlist), connected sources (derived from adapter status), returned offers (from response), last observed (from actual timestamp).
- Main "Latest discovered offers" table with pinned provider/source, GPU model, GPU count, location, per-GPU/hour, per-instance/hour, opening provider URL.
- Quick actions: Explore offers, Connect an agent, Read API docs.
- Insight panel only if enough trustworthy observations; otherwise honest empty state.
- Provider status panel with failure and setup guidance.

### 4.4 GPU explorer `/app/explore` (retain `/explore` redirect)
Three zones: filter toolbar (GPU, region/search, sort), data table, optional comparison inspector. The table must display real/connected records only. CSV export exports visible permitted columns from current results and displays source/timestamp. Loading skeleton; no-results filter clear; missing credential; upstream error; expired data conditions all differ visually and verbally.

### 4.5 Compare `/app/compare`
Select up to three offers during the same session; compare GPU model, quantity, region, per-GPU/hour and instance-hour. Do not claim apples-to-apples equivalence across differing cloud tiers. If fewer than two records selected, show a helpful empty state. Comparison is read-only; purchasing goes to third-party supplier.

### 4.6 Integrations `/app/integrations`, public directory `/sdk`
Language grid with actual logos/text accessible fallback; "Best for", supported capability, code sample and GitHub link for TS, Python, MCP, cURL, OpenAPI and Go. Copy buttons show success and copied string. Don't call unpublished SDK packages installable from npm/PyPI.

### 4.7 Agent connection `/connect` and `/for-agents`
Clear sequence: Choose MCP or language SDK → install source → add local MCP config → search or compare. Show actual commands and configuration. Status note: stdio only; direct hosted MCP URL is planned. Explain read-only permissions and no wallet requirements.

### 4.8 Docs `/docs`, `/docs/api`, `/docs/sdk/[language]`, `/docs/mcp`, `/docs/errors`
Persistent left table of contents, quick search, code tabs with working snippets, copy button, "last updated" when maintained. Contract definitions, status codes, response fields, source provenance, provider configuration, security and rate limits. Use semantic headings and server-rendered code.

### 4.9 Market intelligence `/markets`
Distinguish provider-reported rental offers from indexes and derivative contracts. External Injective SICI reference, not a live trading interface. Explain spot/forward/perp concepts, benchmark assumptions and index-data licences. Omit charts until real timestamped licensed series exist.

### 4.10 Technology `/technology`
Accurate architecture diagram, current stack, trust boundaries, operational limitations, prospective Base/USDC/x402 plans **explicitly labeled planned**.

### 4.11 Pricing `/pricing`
Only promise free read-only features actually available. Paid plan is "In development" with no invented subscriber benefits, price or checkout. Do not create fake billing flows.

### 4.12 About `/about`, status `/status`, glossary `/learn/compute-pricing`
About is factual, not "1000+ customers" or invented partners. Status reads service health via public capability endpoint with explicit configurability. Glossary defines GPU-hour, instance-hour, H100 SXM vs PCIe, spot vs index, provenance, and agent/MCP basics.

## 5. Dashboard interaction contract

| Interaction | Successful behaviour | Edge cases |
| --- | --- | --- |
| GPU select | Fetch relevant offers and update table | Missing API key, timeout |
| Search | Filter only fetched valid records | Nothing matches |
| Price sort | Numeric stable sort | Empty dataset |
| Compare checkbox | Add/remove up to three records | Selection limit reached |
| Source detail | Reveal link, time, units and caveat | Missing field |
| Open supplier | Open legitimate provider URL in new tab | Invalid URL blocked |
| Copy code | Write exact visible snippet to clipboard | Clipboard permission failure |
| SDK language switch | Update code sample and callouts | No published package |
| Theme switch | Persist preference | OS default and no storage |
| Mobile nav | Open accessible menu | Focus escape/outside |
| App-to-docs navigation | Preserve route and coherent breadcrumbs | Not-found fallback |

No disabled button should look functional. Features that need a future backend should be honest explanatory links rather than dummy controls.

## 6. Performance, accessibility, discoverability

- Maintain reading contrast, minimum 44px interactive targets where practical, explicit focus rings, reduced motion, keyboard-operable menus, captioned media, responsive data overflow.
- Use server-rendered HTML for important public copy; client components only for menus, filters, comparison and tabs.
- Avoid above-the-fold heavy WebGL or remote unlicensed hero imagery. Set image dimensions; defer below-the-fold visuals.
- Dedicated title and description per public page; canonical URLs; sitemap; robots; valid structured data that matches on-page copy.
- Keep `/llms.txt` and `/.well-known/neo-compute.json` discoverable but do not represent them as a ranking guarantee.
- Publish uniquely helpful technical content and real data provenance; no doorway pages or mass-produced keyword stuffing.

## 7. Design and release gates

**Visual:** 1440px, 1024px, 768px, 390px, 320px; light and dark contrast; accessible drop-down behaviour.

**Functional:** built pages reachable without credentials; read-only `/api/offers` works or accurately indicates missing credentials; sample docs match SDK; all CTAs navigate correctly.

**Truth:** no numbers or logos without sources; no fake quotes, executed trades, x402 payments or remote MCP.

**Release:** preview first, automated typecheck/lint/tests, Vercel build, browser smoke tests, production promotion only after checks and status confirmation.
