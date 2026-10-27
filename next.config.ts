import type { NextConfig } from 'next';
const nextConfig:NextConfig={reactStrictMode:true,poweredByHeader:false,async redirects(){return[{source:'/explore',destination:'/app/explore',permanent:true},{source:'/agents',destination:'/for-agents',permanent:true},{source:'/connect',destination:'/app/agents',permanent:true}]}};
export default nextConfig;
