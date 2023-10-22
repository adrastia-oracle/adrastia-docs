const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  // any other next.js config
  output: "export",
  images: {
    unoptimized: true,
  },
});
