module.exports = {
  images: {
    formats: [ "image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "console.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};
