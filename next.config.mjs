/** @type {import('next').NextConfig} */
 
const nextConfig = {
    experimental: {
      ppr: 'incremental',//“增量”值允许您对特定路由采用 PPR。
    },
  };
   
  export default nextConfig;