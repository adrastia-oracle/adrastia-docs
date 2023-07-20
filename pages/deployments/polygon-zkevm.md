---
title: Polygon ZkEVM
---

# {% $markdoc.frontmatter.title %}

## Price and Liquidity Aggregators

### Daily Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 24 hours.

- Contract address: 0x06F8968411067d9122B6d4Ec7Bd3d69A220D504a
- Contract version: 4.0.0
- Type: Geometric-mean TWAP, harmonic-mean TWAL
  - Period: 24 hours
  - Granularity: 1
- Update thresholds:
  - Price: 0.5% or every 4 hours
  - Liquidity: 10% or every 8 hours
- Validation:
  - Required liquidity for each underlying oracle:
    - Minimum token liquidity value: 5 WETH
    - Minimum quote token liquidity: 5 WETH
    - Acceptable ratio: between 1:100 and 100:1
  - Minimum valid sources: 1
  - Offchain pegging
- Aggregation strategy: Quote token weighted geometric mean average

### Median Filtered Daily Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, recording the median price and liquidity of three 24-hour TWA observations.

- Contract address: 0xd158c6d1fBefFC16A3C2F60aF4D293E70cc3942A
- Contract version: 4.0.0
- Type: Median filtered oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 3

### 7d Daily Volatility Oracle (WETH)

Configured to provide historical price volatility, measured in log returns, for WETH pairs over seven days.

- Contract address: 0xDe06FD597BDc822bB3F729B55639B46a91E0350a
- Contract version: 4.0.0
- Type: Historical price volatility oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 7 (8 observations are required to calculate 7 deltas)

### Thirty Minute Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 30 minutes.

- Contract address: 0x76f54185815Cd1A4423adff558E90394650Ca0FC
- Contract version: 4.0.0
- Type: Geometric-mean TWAP, harmonic-mean TWAL
  - Period: 30 minutes
  - Granularity: 1
- Update thresholds:
  - Price: 0.5% or every 4 hours
  - Liquidity: 10% or every 8 hours
- Validation:
  - Required liquidity for each underlying oracle:
    - Minimum token liquidity value: 5 WETH
    - Minimum quote token liquidity: 5 WETH
    - Acceptable ratio: between 1:100 and 100:1
  - Minimum valid sources: 1
  - Offchain pegging
- Aggregation strategy: Quote token weighted geometric mean average