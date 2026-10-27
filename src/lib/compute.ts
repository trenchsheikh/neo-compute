/** A single typed boundary for Neo's read-only compute discovery API. */
export const SUPPORTED_GPUS=['H100','H200','B200','A100','L40S','RTX_4090','RTX_5090','A6000'] as const;
export type GPU=typeof SUPPORTED_GPUS[number];
export type Offer={id:string;gpu:string;provider:string;gpuCount:number;hourly:number;instanceHourly:number;region:string;memoryGb:number;link:string};
export type OffersResult={connected:boolean;offers:Offer[];observedAt?:string;notice?:string;error?:string};
export async function getComputeOffers(gpu:GPU, signal?:AbortSignal):Promise<OffersResult>{
 const response=await fetch('/api/offers?gpu='+encodeURIComponent(gpu),{signal,headers:{Accept:'application/json'}});
 let data:OffersResult;
 try{data=await response.json() as OffersResult}catch{throw new Error('Compute API returned an invalid response')}
 if(!response.ok)throw new Error(data.error||data.notice||'Compute provider request failed');
 if(typeof data.connected!=='boolean'||!Array.isArray(data.offers))throw new Error('Compute API response shape is invalid');
 return data;
}
export function compareOffers(offers:Offer[],order:'low'|'high'='low'):Offer[]{return [...offers].sort((a,b)=>order==='low'?a.hourly-b.hourly:b.hourly-a.hourly)}
