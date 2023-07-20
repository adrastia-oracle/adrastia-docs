---
title: Polygon
---

# {% $markdoc.frontmatter.title %}

## Price and Liquidity Aggregators

### Daily Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 24 hours.

- Contract address: 0xAb46C8A1876CC3656326Bb2B3616a9B4E891007B
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

- Contract address: 0x0a3E7369699eeBDbAfA11fE574C8619E71e9e271
- Contract version: 4.0.0
- Type: Median filtered oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 3

### 7d Daily Volatility Oracle (WETH)

Configured to provide historical price volatility, measured in log returns, for WETH pairs over seven days.

- Contract address: 0x00428b3Ab83AC7f3C953f35cF3f6dA5588613eB7
- Contract version: 4.0.0
- Type: Historical price volatility oracle
- Source oracle: Daily Average Oracle (WETH)
- Aggregation parameters:
  - Observation offset: 0
  - Observation increment: 1
  - Observation amount: 7 (8 observations are required to calculate 7 deltas)

### Thirty Minute Average Oracle (WETH)

Configured to provide high-precision price and medium-precision liquidity data for WETH pairs, averaged over 30 minutes.

- Contract address: 0xb349D958b9E35084814B7AAb162bf3A8079d46c2
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

### Current Rate Oracle (WMATIC)

Configured to provide ultra-high-precision price and medium-precision liquidity data for WMATIC pairs.

- Contract address: 0xbcdEf2ab92B23De79f38111f4C721B3A34320b90
- Contract version: 4.0.0
- Type: Current price and liquidity oracle
- Update thresholds:
  - Price: 0.1% or every 4 hours
  - Liquidity: 10% or every 4 hours
- Validation:
  - Required liquidity for each underlying oracle:
    - Minimum token liquidity value: 10,000 MATIC
    - Minimum quote token liquidity: 10,000 MATIC
    - Acceptable ratio: between 1:1000 and 1000:1
  - Minimum valid sources: 1
  - Offchain pegging
- Aggregation strategy: Quote token weighted geometric mean average

### Legacy: Stablecoin Oracle (USDC)

{% callout %}
Legacy: This oracle is near its end-of-life.
{% /callout %}

Configured to provide very high precision prices for stablecoins denominated in USDC.

- Contract address: 0xCa8a774e923C382A10BcBfD623590075b6E15d6B
- Contract version: 2.0.0
- Type: Geometric-mean TWAP, Harmonic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.1%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 10,000 USDC
  - Quote token liquidity: 10,000 USDC
- Underlying oracles:
  - Quickswap Oracle (USDC): 0x91934de765ED12C46b3ff989B7F5e970F0B7Af15
    - Price accumulator: 0x35772434b9f1E6bc05B24EAABD6BaCdA3656115F
    - Liquidity accumulator: 0x262466A4CDd3c99268D3edaF4eF4d0Ded8B2F81F
  - Sushiswap Oracle (USDC): 0x757e787804Dc2E9329bCBeBa9D760fE49f4161bb
    - Price accumulator: 0xe92Ae6Bd49f68f5F4F01a11e78ba58e79328Ad24
    - Liquidity accumulator: 0x46B12c40a3bC2c56571FaEA39B2e5dC5428D352a
  - Uniswap v3 Oracle (USDC): 0x495eF7a2e4b2F90F011a1Ba16CA7401372f5745e
    - 0.01% and 0.05% fee tiers
    - Price accumulator: 0x2416E6A2785603f59D225f391fc576e779d6CcEF
    - Liquidity accumulator: 0x3a6504f25c1A161Af9f2f85864d08Ff7e5D40240

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
- All feeds
  - Tertiary: 0xaa32c429b6051aad41c8c172edbffe0922fef82c
  - Quaternary: 0x9f323d3279c3a9f8d82fc0361200de39f6127f49

### Legacy: Large-Cap Oracle (WETH)

{% callout %}
Legacy: This oracle is near its end-of-life. Please use the newer version (Thirty Minute Average Oracle) listed above.
{% /callout %}

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0x9266cfc10D08E9938DE9Ef098E7E7E374b035D7D
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
  - Quickswap Oracle (WETH): 0xB82fAA4952A71189f81d68357A537188A72dc06B
    - Price accumulator: 0x10B35407D9623b3f2597908a5bF1E0f00BbD4a91
    - Liquidity accumulator: 0xEb102A1E9C3AEd0F21A58D398C76a2695C58E928
  - Sushiswap Oracle (WETH): 0x4F14eB6291dfAE96C1303835359307fF2bc8AaD5
    - Price accumulator: 0x02dF4B33e79B7520697ab462042e380eF4FfB23c
    - Liquidity accumulator: 0x6C6b82a2ff2EcAF3FC4F6a323a9Bb087973D69ae
  - Uniswap v3 Oracle (WETH): 0xf88D9621765D6e7a9D209DB7848f530f3dc67Dd9
    - 0.05% and 0.3% fee tiers
    - Price accumulator: 0x6eCD37B311e04c15c1D8C34829eC203a9FbFbea4
    - Liquidity accumulator: 0xd123a2a2078C9B4baF2c967be2c0bc2C316D29B0

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
- Feed: **COMP/WETH**
  - Primary: 0xD755d4f60bcA0dCFe974d208814261cdc1AFAdC2
  - Secondary: 0x2161cB0F6F6Ca74aC27815F0EBad430Bd128Cc61
- Feed: **AAVE/WETH**
  - Primary: 0x016BbA3EDBBc48713e1Cfab40419dDC3EB7C0C6d
  - Secondary: 0x632081c114c5DbDc795213586B006aC67dADF066
- Feed: **CRV/WETH**
  - Primary: 0x0dE7FD1bA7013eedABba149E55c4432Fe2aEdBA5
  - Secondary: 0x28ed0e69f998285f24f854F89C9cd8A219E1cDd4
- Feed: **UNI/WETH**
  - Primary: 0x9B94F18e7dC569335c8EC73fdddD4e3928230032
  - Secondary: 0x755750811E771b7aB043Ce2C6F95219054d9A6cA
- Feed: **LINK/WETH**
  - Primary: 0x0ba2eF9965F2B43F95C8Bb088a63fAc82D0367f8
  - Secondary: 0x49CF4c840c16eD37302F5Bc19D905c4D893A7148
- All feeds
  - Tertiary: 0xaa32c429b6051aad41c8c172edbffe0922fef82c
  - Quaternary: 0x9f323d3279c3a9f8d82fc0361200de39f6127f49

### Deprecated: Stablecoin Oracle (USDC)

{% callout %}
Deprecated: This oracle is no longer maintained. It has been replaced by a newer version.
{% /callout %}

Configured to provide very high precision prices for stablecoins denominated in USDC.

- Contract address: 0x3818552efFd8aea943Cd294D33ccDcee53bB09B3
- Contract version: 1.0.0
- Type: Arithmetic-mean TWAP, Arithmetic-mean TWAL
  - Period: 30 minutes
- Update thresholds (% change):
  - Price: 0.1%
  - Liquidity: 10%
- Required liquidity for each underlying oracle:
  - Token liquidity value: 10,000 USDC
  - Quote token liquidity: 10,000 USDC
- Underlying oracles:
  - Quickswap Oracle (USDC): 0x66244d50b8802b189F9Df035d5fF0608a08043b6
    - Price accumulator: 0xc763Ec3C55e1C0039689de20adAFAeA8C3d3ce70
    - Liquidity accumulator: 0xe2c29c1172c72851DddD1e9c2F0D75c1F0666fc1
  - Sushiswap Oracle (USDC): 0x13c0Ce7fEcCa7146b9031fc70688bEc81233f40A
    - Price accumulator: 0x368fC34A24056afdBcA62AeC1A7400af189f6D94
    - Liquidity accumulator: 0x33eAdF30fBf8f91759E1A15571Fa157B2cCb7a12
  - Uniswap v3 Oracle (USDC): 0x366E50803d320aa7bC3d54775cfD45163e928B5F
    - 0.01% and 0.05% fee tiers
    - Price accumulator: 0xb7738295bad27AEb971a78131cF6578169263cBE
    - Liquidity accumulator: 0x26a3547148dC1134796244baE00494a9513469f6

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
- All feeds
  - Tertiary: 0xaa32c429b6051aad41c8c172edbffe0922fef82c
  - Quaternary: 0x9f323d3279c3a9f8d82fc0361200de39f6127f49

### Deprecated: Large-Cap Oracle (WETH)

{% callout %}
Deprecated: This oracle is no longer maintained. It has been replaced by a newer version.
{% /callout %}

Configured to provide high precision prices for highly liquid assets denominated in WETH.

- Contract address: 0xFe43c0C1053a8caD2633f0A478aa91506b5d8b08
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
  - Quickswap Oracle (WETH): 0x5C7F76849f65F1D3f5b5Dc328488348FB6828C69
    - Price accumulator: 0x11d8d3CC7E75A951394FA95dAA8D575e1648555f
    - Liquidity accumulator: 0xD5393e5F9f4E6A2eFA3Ee466ba49B3586d38A0C8
  - Sushiswap Oracle (WETH): 0x2CF1898C6c7b4EAa47B7b0916CDAbA09278Ff865
    - Price accumulator: 0x66b3372BB592F7c7b25D027Eb0187ADb817D65f0
    - Liquidity accumulator: 0x2c6b5137c40F522d0952937FD75853A46693CF62
  - Uniswap v3 Oracle (WETH): 0x0DA505a619c1eA207de1F5469ECc1cD1DA3419e3
    - 0.05% and 0.3% fee tiers
    - Price accumulator: 0x48ebE7d748B121Fdf103fB43C8B6cbe253b40284
    - Liquidity accumulator: 0x0fdE766eb44FA829EddAbB42d1dfb1a5178e3b34

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
- Feed: **COMP/WETH**
  - Primary: 0xD755d4f60bcA0dCFe974d208814261cdc1AFAdC2
  - Secondary: 0x2161cB0F6F6Ca74aC27815F0EBad430Bd128Cc61
- Feed: **AAVE/WETH**
  - Primary: 0x016BbA3EDBBc48713e1Cfab40419dDC3EB7C0C6d
  - Secondary: 0x632081c114c5DbDc795213586B006aC67dADF066
- Feed: **CRV/WETH**
  - Primary: 0x0dE7FD1bA7013eedABba149E55c4432Fe2aEdBA5
  - Secondary: 0x28ed0e69f998285f24f854F89C9cd8A219E1cDd4
- Feed: **UNI/WETH**
  - Primary: 0x9B94F18e7dC569335c8EC73fdddD4e3928230032
  - Secondary: 0x755750811E771b7aB043Ce2C6F95219054d9A6cA
- Feed: **LINK/WETH**
  - Primary: 0x0ba2eF9965F2B43F95C8Bb088a63fAc82D0367f8
  - Secondary: 0x49CF4c840c16eD37302F5Bc19D905c4D893A7148
- All feeds
  - Tertiary: 0xaa32c429b6051aad41c8c172edbffe0922fef82c
  - Quaternary: 0x9f323d3279c3a9f8d82fc0361200de39f6127f49

## Gas Prices

### TWA Fast Gas Oracle (Gwei)

Configured to provide medium-precision fast gas prices, averaged over 15 minutes, powered by Polygonscan.

- Contract address: 0xb8fa3e600a0a37bb35fb2e68f6a288f65949df54
- Contract version: 4.0.0
- Type: Arithmetic-mean TWAP
  - Period: 15 minutes
  - Granularity: 1
- Update thresholds:
  - Price: 25% or every 1 hour

### Current Fast Gas Oracle (Gwei)

Configured to provide medium-precision fast gas prices, powered by Polygonscan.

- Contract address: 0xFB2a058E07E7aDadDCe98A1d836899b44a6ebD56
- Contract version: 4.0.0
- Type: Current price oracle
- Update thresholds:
  - Gas price: 25% or every 1 hour

## Interest Rates

### Compound III USDC Interest Rate Oracle

Configured to provide high-precision interest rates for the Compound III USDC market, averaged over 7 days.

Note: Interest rates are stored in the price field of the observation.

- Contract address: 0x4D5881b3DFA882e1b52B64C83d8Dc6c8F2CdF8DA
- Contract version: 4.0.0
- Type: Geometric-mean TWA
  - Period: 7 days
  - Granularity: 7 (updated daily)
- Update thresholds:
  - Interest rate: 2% (relative change) or every 24 hours

### Aave v3 USDC Interest Rate Oracle

Configured to provide high-precision interest rates for the Aave v3 USDC market, averaged over 7 days.

Note: Interest rates are stored in the price field of the observation.

- Contract address: 0x5ebB1ADA9Df2C39bA65748Cd545499dA1AA26CCf
- Contract version: 4.0.0
- Type: Geometric-mean TWA
  - Period: 7 days
  - Granularity: 7 (updated daily)
- Update thresholds:
  - Interest rate: 2% (relative change) or every 24 hours