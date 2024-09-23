/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary base hostname
        port: "",
        pathname: "/do1ia4vzf/image/upload/**", // Match all subfolders and files under this path
      },
      {
        protocol: "https",
        hostname: "multivendor.enatega.com",
        port: "",
        pathname: "/static/media/**",
      },
      {
        protocol: "https",
        hostname: "enatega.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
