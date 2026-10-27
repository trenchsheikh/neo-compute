import assert from 'node:assert/strict';
const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:4173';
const pages = ['/', '/products', '/for-agents', '/sdk', '/markets', '/technology', '/pricing', '/about', '/status', '/learn/compute-pricing', '/docs', '/docs/api', '/docs/mcp', '/docs/errors', '/docs/sdk/typescript', '/docs/sdk/python', '/docs/sdk/go', '/docs/sdk/http', '/docs/sdk/openapi', '/app', '/app/explore', '/app/compare', '/app/integrations', '/app/agents'];
async function request(path, init = {}) { const response = await fetch(base + path, { signal: AbortSignal.timeout(10000), ...init }); return response; }
for (const path of pages) { const response = await request(path); assert.equal(response.status, 200, path + ': unexpected HTTP ' + response.status); const html = await response.text(); assert.match(html, /<html[^>]*lang="en"/, path + ': missing document language'); assert.match(html, /<title>/, path + ': missing title'); process.stdout.write('PASS ' + path + '\n'); }
const bad = await request('/api/offers?gpu=UNSUPPORTED'); assert.equal(bad.status, 400);
const offers = await request('/api/offers?gpu=H100'); assert.equal(offers.status, 200); const data = await offers.json(); assert.equal(typeof data.connected, 'boolean'); assert.ok(Array.isArray(data.offers));
const capResponse = await request('/api/capabilities'); assert.equal(capResponse.status, 200); const caps = await capResponse.json(); assert.equal(caps.capabilities.gpuProvisioning, false); assert.equal(caps.capabilities.stablecoinPayments, false);
const llms = await request('/llms.txt'); assert.equal(llms.status, 200); assert.match(await llms.text(), /Neo Compute/);
const sitemap = await request('/sitemap.xml'); assert.equal(sitemap.status, 200); assert.match(await sitemap.text(), /docs\/api/);
const redirect = await request('/explore', {redirect:'manual'}); assert.ok([307,308].includes(redirect.status)); assert.ok((redirect.headers.get('location')||'').includes('/app/explore'));
console.log('PASS all public routes, APIs and machine-readable discovery checks.');
