---
title: Arbitrum
---

# {% $markdoc.frontmatter.title %}

## Aggregators

### Large-Cap Oracle (WETH)

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0x77008B19fd4e7f9590e7695f7d9A02F1AF2Ac7ad
- Type: Time-weighted averages
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.5%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 5 WETH
  - Quote token liquidity: 5 WETH
- Underlying oracles:
  - Sushiswap Oracle (WETH): 0x0D11468cA479FE165ec8aDF768Fde690a6C6973E
  - Uniswap v3 Oracle (WETH): 0x056a7d17141F9138AA028C27EE592A488d97F99C
    - 0.05% and 0.3% fee tiers

#### Updater addresses
- Feed: **USDC/WETH**
  - Primary: 0x0D47e283E4c999310Ae18c26f44Ac04E56076840
  - Secondary: 0x126611100f6E56d8790BA862AE4d245e444c84D4
- All feeds
  - Tertiary: 0x4fd5aaecfd7e681136de4682cf2c5b0237aac404
  - Quaternary: 0xd82ced2698aa601036ab71a4bb739725123c8e6f