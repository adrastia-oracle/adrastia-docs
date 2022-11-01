---
title: Evmos
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### USD Pegged Aggregated Oracle (USD)

Configured to provide high precision prices for assets denominated in various USD-pegged stablecoins on Diffusion.

- Contract address: 0xd850F64Eda6a62d625209711510f43cD49Ef8798
- Type: Time-weighted averages
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 1,000 USD
  - Quote token liquidity: 1,000 USD
- Underlying oracles:
  - Diffusion Oracle (axlUSDC): 0xB75768004b6D074aAcC42e333F5dc7232D540a9c
  - Diffusion Oracle (ibc G-USDT): 0xd158c6d1fBefFC16A3C2F60aF4D293E70cc3942A
  - Diffusion Oracle (ceUSDC): 0x92e67491DAC364568861cc88Ac5Dd33e3E6dC874

#### Updater addresses
- Feed: **WEVMOS/USD**
  - Primary: 0x76560102714FDDff1AC8b53e138A220B44873F29
  - Secondary: 0x5496461D526A5957d2e04909F039370Ecb198F89

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
- Feed: **axlWETH/WEVMOS**
  - Primary: 0x0f5677D8419D58d11c52fb93a82093D9ED4f8F2e
  - Secondary: 0xDf5bd4EA3Bd6bC94949b73CB87c5D3C3657BAd67
- Feed: **ceWETH/WEVMOS**
  - Primary: 0xb1EC86Db1F492CbBC203692F3D72dE1F456CE84b
  - Secondary: 0x7D28BE99633EcbD6D7729194Ed65e0744B20e2C6
- Feed: **gWETH/WEVMOS**
  - Primary: 0x7860965072dC058baB05458A653A659CbFC26A2D
  - Secondary: 0xe0E0c0C794B98D93F4a432dC397Ea985105E2131
- Feed: **gUSDT/WEVMOS**
  - Primary: 0xA99798E52c7929ABf30C56eF6208db3B63721f7f
  - Secondary: 0x1de4045EEc7763801BC0B6eb59b88f910eb420bA
- Feed: **gDAI/WEVMOS**
  - Primary: 0xdc6E00907485f30aB6074F5c7Ab663b375cb6cf1
  - Secondary: 0x1Eb2A281339a5C4601d630F7EB4DE878F62fd8DF
- Feed: **axlWBTC/WEVMOS**
  - Primary: 0x5a5B957D0E5c76cb86e0Eb36fDe678545BD23649
  - Secondary: 0x10AB368E428CA2b1e871a6B350c895429c39158D