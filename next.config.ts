import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // Используем новое поле turbopack, не экспериментальное
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: RegExp }) => rule.test?.toString().includes("svg")
    );
    if (fileLoaderRule) {
      // делаем исключение, чтобы svg не попадали в старое правило
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // опции, например icon: true
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
