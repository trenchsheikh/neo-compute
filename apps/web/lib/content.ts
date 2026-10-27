export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://neo-compute.vercel.app';
export const navigation = [
 {label:'Platform',items:[['Overview','/'],['Compute Explorer','/app/explore'],['Market Intelligence','/markets'],['All Products','/products']]},
 {label:'Solutions',items:[['For Developers','/sdk'],['For AI Agents','/for-agents'],['Compute Research','/markets']]},
 {label:'Developers',items:[['Documentation','/docs'],['API Reference','/docs/api'],['TypeScript SDK','/docs/sdk/typescript'],['Python SDK','/docs/sdk/python'],['MCP Integration','/docs/mcp'],['OpenAPI','/docs/sdk/openapi']]},
 {label:'Resources',items:[['Technology','/technology'],['Compute Pricing Guide','/learn/compute-pricing'],['Status','/status'],['About','/about']]},
] as const;
export const products=[
 {name:'Compute Explorer',slug:'explorer',tag:'AVAILABLE WITH SOURCE',title:'A clearer view of GPU supply.',description:'Search a supported GPU model, review provider-reported offers and inspect their hourly costs.',href:'/app/explore'},
 {name:'Agent Integrations',slug:'agents',tag:'AVAILABLE · LOCAL MCP',title:'Compute discovery for autonomous tools.',description:'Give agents typed GPU search and comparison through TypeScript, Python, MCP or HTTP.',href:'/for-agents'},
 {name:'Market Intelligence',slug:'markets',tag:'INFORMATIONAL',title:'Understand the economics of compute.',description:'Learn how GPU rental rates differ from benchmark indices and emerging derivatives markets.',href:'/markets'},
 {name:'Historical Intelligence',slug:'history',tag:'PLANNED',title:'Read the signals behind prices.',description:'Timestamped historical rental series, cross-provider comparisons and alerts require persistent data.',href:'/technology'},
 {name:'Agent Procurement',slug:'procure',tag:'PLANNED',title:'Automate provisioning with controls.',description:'Approved compute booking, cost ceilings, job timeouts and billing reconciliation are future work.',href:'/technology'},
 {name:'Onchain Payments',slug:'payments',tag:'PLANNED',title:'Stablecoin rails for agent purchases.',description:'EVM USDC and x402 settlement are under evaluation; there is no live checkout today.',href:'/technology'},
] as const;
export const sdkLinks=[
 {name:'TypeScript',key:'typescript',desc:'Typed GPU discovery for Node.js and web applications',href:'/docs/sdk/typescript'},
 {name:'Python',key:'python',desc:'HTTP client for AI pipelines and research tools',href:'/docs/sdk/python'},
 {name:'MCP',key:'mcp',desc:'Local tools for agents and coding assistants',href:'/docs/mcp'},
 {name:'OpenAPI',key:'openapi',desc:'Generate a client for almost any language',href:'/docs/sdk/openapi'},
 {name:'Go',key:'go',desc:'Standard-library HTTP integration example',href:'/docs/sdk/go'},
 {name:'cURL / HTTP',key:'http',desc:'The same API from any environment',href:'/docs/sdk/http'},
] as const;
