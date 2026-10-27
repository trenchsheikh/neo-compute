/** Explicit feature availability metadata: never represent roadmap items as launched. */
export const PRODUCTS=[
 {id:'explorer',title:'Compute Explorer',url:'/explore',status:'available',description:'Sourced GPU comparisons, configurable provider connection'},
 {id:'markets',title:'Market Intelligence',url:'/markets',status:'informational',description:'Learn the economics of GPU compute and benchmarks'},
 {id:'agent-tools',title:'Agent Integration',url:'/connect',status:'available',description:'Python MCP tools, TypeScript SDK and OpenAPI integration'},
 {id:'data',title:'Historical Price Intelligence',url:'/technology',status:'planned',description:'Longitudinal GPU price history and transparent source aggregation'},
 {id:'procurement',title:'Agent Procurement',url:'/technology',status:'planned',description:'Permissioned GPU booking and workload lifecycle controls'},
 {id:'payments',title:'Onchain Payments',url:'/technology',status:'planned',description:'USDC and x402 settlement with explicit budgets'}
] as const;
