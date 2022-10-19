---
title: Evmos
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### Aggregated Oracle (WEVMOS)

Configured to provide high precision prices for assets denominated in WEVMOS.

- Contract address: 0x51d3d22965Bb2CB2749f896B82756eBaD7812b6d
- Type: Time-weighted averages
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 1,000 WEVMOS
  - Quote token liquidity: 1,000 WEVMOS
- Underlying oracles:
  - Diffusion Oracle (WEVMOS): 0x127EE750A56A64c39c2d7abb30d221c51cEDBe12
  - EvmoSwap Oracle (WEVMOS): 0x72c2A64Ea1Cae1F54f854958360bAd135d8D070A
  - Cronus Oracle (WEVMOS): 0x2Ff3791C3F933dCad359CaE024bbC80847aD2deb

#### Updater addresses
- Feed: **gUSDC/WEVMOS**
  - Primary: 0x3b28D068e55E72355d726E7836a130C0918E9c0E
  - Secondary: 0xECfb47E14827EC01B4535fF8E00a9A2b62Bf95ac
- Feed: **ATOM/WEVMOS**
  - Primary: 0xE9583B1fd31265f15fFfA87Ae4c516bdC510eF63
  - Secondary: 0xeA92558D38540571f91da5A689e433dd50cd6Cff
- Feed: **OSMO/WEVMOS**
  - Primary: 0xb38b43B219A86Bdb6239A953eFf49Eb71865A8fB
  - Secondary: 0x085fAEB149dBC7373a716A590e824247E3AE4F2f
- Feed: **JUNO/WEVMOS**
  - Primary: 0x667B09412F3437d24Ca3FEf1aA7925fC792782E8
  - Secondary: 0xc12898641024B62f54Ec36AE23E6cF1294129732