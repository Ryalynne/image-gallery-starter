module.exports = {
  images: {
    formats: ["image/avif", "image/webp" ,"image/jpg"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};
