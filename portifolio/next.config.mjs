import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve("./"), // resolve para a pasta atual
  },
};

export default nextConfig;
