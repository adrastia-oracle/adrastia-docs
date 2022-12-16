---
title: Ethereum
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### Stablecoin Oracle (USDC)

{% callout %}
Preview-only: This oracle is not being maintained. It is only available for preview purposes. If you are interested in using Adrastia on Ethereum, please contact us regarding [sponsorship](/price-feeds/sponsoring).
{% /callout %}

Configured to provide very high precision prices for stablecoins denominated in USDC.

- Contract address: 0x804511eD6C51582E8C62Ce04aFd824cfF6B6872B
- Contract version: 1.0.0
- Type: Arithmetic-mean TWAP, Arithmetic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.1%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 100,000 USDC
  - Quote token liquidity: 100,000 USDC
- Underlying oracles:
  - Uniswap v2 Oracle (USDC): 0x72c2A64Ea1Cae1F54f854958360bAd135d8D070A
  - Sushiswap Oracle (USDC): 0x91Bd6f598549360004d0A4d436bF4c67730850f8
  - Uniswap v3 Oracle (USDC): 0xd850F64Eda6a62d625209711510f43cD49Ef8798
    - 0.01% and 0.05% fee tiers

#### Updater addresses
- All feeds
  - Tertiary: 0xf0c9c815a6f58dabc810d5402ffb7e75c7443bb2
  - Quaternary: 0x80c347a09299988a3bb5f59107fb70fdad6b46b3

### Large-Cap Oracle (WETH)

{% callout %}
Preview-only: This oracle is not being maintained. It is only available for preview purposes. If you are interested in using Adrastia on Ethereum, please contact us regarding [sponsorship](/price-feeds/sponsoring).
{% /callout %}

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0x7184CCfee311bbbB6fbC7a4abFC26D55648d9415
- Contract version: 1.0.0
- Type: Arithmetic-mean TWAP, Arithmetic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 50 WETH
  - Quote token liquidity: 50 WETH
- Underlying oracles:
  - Uniswap v2 Oracle (WETH): 0x067f1B281E8bc66c9CC9D7922120f753FC25B10c
  - Sushiswap Oracle (WETH): 0x42105A37A7a76eB83671e011acC6e8A7Eec2031D
  - Uniswap v3 Oracle (WETH): 0x3f31ca527D645Fa8744D1DCb674c1239fC96B59e
    - 0.3% fee tier

#### Updater addresses
- All feeds
  - Tertiary: 0xf0c9c815a6f58dabc810d5402ffb7e75c7443bb2
  - Quaternary: 0x80c347a09299988a3bb5f59107fb70fdad6b46b3