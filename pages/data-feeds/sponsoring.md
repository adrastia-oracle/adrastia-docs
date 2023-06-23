---
title: Sponsoring Data Feeds
description: Learn how to sponsor Adrastia data feeds.
---

# {% $markdoc.frontmatter.title %}

## Introduction

Data feeds cost money to maintain. They require infrastructure to run the bots and RPC nodes, people to monitor the infrastructure and respond to issues, and crypto to pay for the gas fees. Sponsorship is a way for others to help keep the data feeds running by paying for the costs.

## Payees

Anyone who wants to can pay for data feeds. Typically this will be:
- Projects with their own token
- Lending platforms wanting to create a market for a token
- Wealthy investors wanting to borrow against their tokens

## Recipients

Currently, the entity running the infrastructure receives the sponsorship. At the moment, this is solely the Adrastia team, namely, TRILEZ SOFTWARE INC. In the future, we'll have a smart contract to distribute the funds to our data feed maintainers. See the [roadmap](/fundamentals/roadmap) (staking and incentives) for more details.

## Costs

Sponsorships cost US$2500/month for each data feed plus gas costs.

### Gas cost estimates

Gas costs for each data feed vary based on a variety of factors:
- Resolution (percent change that triggers an update)
- Heartbeats (the maximum time between updates)
- TWAP periods
- Volatility (of the pair)
- Underlying DEXs (number and variety)
- Gas price

Rough estimates for worst-case gas costs with 0.5% price resolution, 10% liquidity resolution, 24-hour heartbeats, 30-minute TWAP periods, and three underlying DEXs as of September 20, 2022 (over the past month) for USDC/WETH (as an example) are:
- Ethereum: 7 ETH/month (at 22 Gwei average gas cost)
- Polygon: 65 MATIC/month (at 141 average gas cost)
- Optimism/Arbitrum: 0.15 ETH/month (at 22 Gwei average Ethereum gas cost)

## Minimums

The minimum sponsorship duration is three months.

## Guarantees and SLAs

There are no universal guarantees or SLAs. See our main website for data on the existing data feeds to see how well they perform. We do not guarantee that the current performance will continue, but we strive for excellence, and we understand how crucial it is for the ecosystem to have reliable data feeds.

## Other requirements

In addition to paying for the data feeds, other requirements are:
1. If the data feed is for a price, there should be sufficient DEX liquidity for the token. See the relevant deployments pages for more details on the required liquidity for each underlying oracle.

## Proceeding with sponsorship

If you're interested in sponsoring a data feed, please send us a message in the #partnerships channel on our Discord server.

The process will look something like this:
1. We'll discuss your needs for the data feed you want to sponsor and come to an agreement.
2. You'll send us the base cost in USDC, DAI, or RAI on Ethereum.
3. We'll create a cold wallet for the data feed gas costs and send you the address.
4. We'll deploy any new contracts necessary.
5. We'll set up any new infrastructure necessary.
6. You'll fund the cold wallet to cover the gas costs.
7. We'll fund the four hot wallets of our updater bots.
8. We'll start our updater bots.

We'll return unused funds in the cold wallet at the end of the sponsorship period unless you renew the sponsorship. We'll continue to use the funds in the hot wallets to prevent sudden service interruptions. With that being said, it's vital to discuss hot wallet funding.

### Hot wallet funding

We'll top our hot wallets when their balances fall below a certain threshold, defined as follows:

| Chain | Threshold | Top-up amount |
| ----- | --------- | ------------- |
| Ethereum | 2 ETH | 5 ETH |
| Optimism | 0.2 ETH | 1 ETH |
| Arbitrum | 0.2 ETH | 1 ETH |
| Polygon | 100 MATIC | 250 MATIC |

When we have multiple sponsors for a single data feed, we'll split the hot wallet funding between them.

{% callout %}
Ensure that the cold wallet address we give you never runs out of funds. If it does, the data feed may stop updating.
{% /callout %}