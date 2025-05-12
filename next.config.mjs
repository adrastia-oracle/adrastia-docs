import nextra from 'nextra';

const withNextra = nextra({
  // ... your Nextra config
});

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      // @ts-expect-error -- fixme
      (rule) => rule.test?.test?.('.svg')
    );
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          use: ['@svgr/webpack'],
        },
        imageLoaderOptions,
      ],
    });
    return config;
  },
});
