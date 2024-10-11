/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cehsoft.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    sassOptions: {
      additionalData: `$var: red;`, 
    },
  };
  
  export default nextConfig;
  