---
title: Optimism
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### Large-Cap Oracle (WETH)

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