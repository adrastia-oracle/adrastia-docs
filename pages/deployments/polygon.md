---
title: Polygon
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### Stablecoin Oracle (USDC)

Configured to provide very high precision prices for stablecoins denominated in USDC.

- Contract address: 0x3818552efFd8aea943Cd294D33ccDcee53bB09B3
- Type: Time-weighted averages
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.1%
  - Liquidity: 10%
- Underlying oracles:
  - Quickswap Oracle (USDC): 0x66244d50b8802b189F9Df035d5fF0608a08043b6
  - Sushiswap Oracle (USDC): 0x13c0Ce7fEcCa7146b9031fc70688bEc81233f40A
  - Uniswap v3 Oracle (USDC): 0x366E50803d320aa7bC3d54775cfD45163e928B5F
    - 0.01% and 0.05% fee tiers

#### Updater addresses
- Feed: **DAI/USDC**
  - Primary: 0xC711F4f3c0F59ccbE07F5C6CbfA06c451E86594e
  - Secondary: 0xF3e50d02bD7b659a7E47b547bd3ED5cEBDB79973
- Feed: **USDT/USDC**
  - Primary: 0xA97a5A4b9152B876510Ebd84BD6Be00620EC7969
  - Secondary: 0x675d7cFdaFbB2F1C443D42446534b71DBa93f553
- Feed: **TUSD/USDC**
  - Primary: 0x1f90349Aa4aBEF36bDFA7560f0380989Cc610845
  - Secondary: 0x0bA1accC52d04618e400f39B4E6874C6CfCBc58B
- Feed: **FRAX/USDC**
  - Primary: 0x11AE2FD9Ab55063FD039B6396C628a7EadC8214f
  - Secondary: 0xcE690B5db91979c2BDe060ba46C9a39818538A9a

### Large-Cap Oracle (WETH)

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0xFe43c0C1053a8caD2633f0A478aa91506b5d8b08
- Type: Time-weighted averages
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Underlying oracles:
  - Quickswap Oracle (WETH): 0x5C7F76849f65F1D3f5b5Dc328488348FB6828C69
  - Sushiswap Oracle (WETH): 0x2CF1898C6c7b4EAa47B7b0916CDAbA09278Ff865
  - Uniswap v3 Oracle (WETH): 0x0DA505a619c1eA207de1F5469ECc1cD1DA3419e3
    - 0.05% and 0.3% fee tiers

#### Updater addresses
- Feed: **USDC/WETH**
  - Primary: 0xc9f551a5f3f7e9d5c4d1a031e0f926aadb391c2d
  - Secondary: 0x1da6d533e81f8d6590fb8a09d03de1820390f331
- Feed: **WBTC/WETH**
  - Primary: 0x93a83d37da075304e136b4d72df558c396f6d40b
  - Secondary: 0xe30c71c0ed797ac7a0d33858bd5114b4df5c4064
- Feed: **WMATIC/WETH**
  - Primary: 0x253EE59e957cC7412379eE2E091d247bE9c99daA
  - Secondary: 0x681baAB2545D106F3B8B87D403e221d717871dCe