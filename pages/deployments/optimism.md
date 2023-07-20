---
title: Optimism
---

# {% $markdoc.frontmatter.title %}

## Price and Liquidity Aggregators

### Daily Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 24 hours.

- Contract address: 0xFA84f31f3187b921BAB4D3E3206d0b0DE7A3D94b
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

- Contract address: 0x6bb5e2F80F929ab467335F9a8ed10585619e24F5
- Contract version: 4.0.0
- Type: Median filtered oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 3

### 7d Daily Volatility Oracle (WETH)

Configured to provide historical price volatility, measured in log returns, for WETH pairs over seven days.

- Contract address: 0xCC35CCAAb98A31fc81C26Ccc53dA7419DE9869B7
- Contract version: 4.0.0
- Type: Historical price volatility oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 7 (8 observations are required to calculate 7 deltas)

### Thirty Minute Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 30 minutes.

- Contract address: 0x449D131f2Ae53a337FE5A21b3D749E603ce6454c
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

### Legacy: Large-Cap Oracle (WETH)

{% callout %}
Legacy: This oracle is near its end-of-life. Please use the newer version (Thirty Minute Average Oracle) listed above.
{% /callout %}

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0xbf4b4C46A2070f2Dbb60d41462Ef704751c5B777
- Contract version: 2.0.0
- Type: Geometric-mean TWAP, Harmonic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 5 WETH
  - Quote token liquidity: 5 WETH
- Underlying oracles:
  - Uniswap v3 Oracle (WETH): 0x8D0c5c82a5D4fD28a10EB43d4caf0c94386793b9
    - 0.3% fee tier

#### Updater addresses
- Feed: **USDC/WETH**
  - Primary: 0x9b39d511dca866bfb8d8e6132fc0ef02d26ce8d1
  - Secondary: 0x97944B231F42D9C0243e774c024fA89BDD31Ee07
- All feeds
  - Tertiary: 0x85820a556061e045c349a3f7a3ffc1271342e98d
  - Quaternary: 0x28c282208c5f9343823fafce45ae01dd3c7bc4d9

### Deprecated: Large-Cap Oracle (WETH)

{% callout %}
Deprecated: This oracle is no longer maintained. It has been replaced by a newer version.
{% /callout %}

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0x2Ff3791C3F933dCad359CaE024bbC80847aD2deb
- Contract version: 1.0.0
- Type: Arithmetic-mean TWAP, Arithmetic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 5 WETH
  - Quote token liquidity: 5 WETH
- Underlying oracles:
  - Uniswap v3 Oracle (WETH): 0x1D8B85D36189cAB860F6E45F7835355ee9E0A391
    - 0.3% fee tier

#### Updater addresses
- Feed: **USDC/WETH**
  - Primary: 0x9b39d511dca866bfb8d8e6132fc0ef02d26ce8d1
  - Secondary: 0x97944B231F42D9C0243e774c024fA89BDD31Ee07
- All feeds
  - Tertiary: 0x85820a556061e045c349a3f7a3ffc1271342e98d
  - Quaternary: 0x28c282208c5f9343823fafce45ae01dd3c7bc4d9