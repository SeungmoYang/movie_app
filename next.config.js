/** @type {import('next').NextConfig} */

const API_BASE = "https://api.themoviedb.org/3/"
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*", //해당 주소로 이동하려 하면 
        destination: "/new-blog/:path*", //이 주소로 redirect됨 
        permanent: false, //브라우저에서 redirect 정보를 영구적으로 기억할지에 대한 여부를 지정 
      },
    ]
  },

  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `${API_BASE}movie/popular?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig

