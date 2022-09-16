---
title: Economics
---

# {% $markdoc.frontmatter.title %}

## Overview

We break the economics of Adrastia into two parts:
- Accurate prices at decentralized exchanges (DEXs)
- Incentivizing updaters

## Accurate prices

While not directly related to the economics of Adrastia, the economics of decentralized exchanges (DEXs) are essential to understand. DEXs are the sole sources of on-chain price data for Adrastia. The more accurate the prices at DEXs, the more accurate the prices at Adrastia. So how accurate are DEX prices, and what factors influence this accuracy?

The main factors influencing the accuracy of DEX prices are:
- Liquidity
- Fees
- Accessibility

### DEX mechanics

To understand how these factors come into play, we must look at how prices come about at DEXs. The top DEXs are all [automated market makers (AMMs)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers), which means they use mathematical formulas to determine asset prices. Put simply, these DEXs use the ratio of tokens in [liquidity pools](https://www.gemini.com/cryptopedia/what-is-a-liquidity-pool-crypto-market-liquidity) to determine prices. Generally, the more of one token in a pool, the lower the price of that token, and the higher the price of other tokens.

{% callout %}
[Video: What is an Automated Market Maker? (Liquidity Pool Algorithm)](https://www.youtube.com/watch?v=1PbZMudPP5E)
{% /callout %}

As traders buy and sell tokens, the ratio of tokens in the pool changes. This token swapping changes the price of the tokens. The liquidity of the pool determines how many tokens can be swapped before the price changes (note: this change is known as slippage). Higher liquidity means the price will change less as tokens are swapped.

### Differing exchange rates

So now we know how the price changes at DEXs, but how do we know the price is accurate? The price is accurate if the price at the DEX matches the price at other exchanges. If the price at the DEX is significantly different from other exchanges, then the price at the DEX is inaccurate.

Naturally, the prices at each exchange will not match perfectly. As the price changes at one exchange, it will take time for the price to change at other exchanges.

### Arbitrage opportunities

A different price at one exchange creates an arbitrage opportunity. An arbitrage opportunity is when the price at one exchange is significantly different from the price at another exchange. Traders can take advantage of this opportunity by buying at a lower price and selling at a higher price. This creates a demand for the token at a lower price, which increases the price at that exchange. This demand also creates a supply of the token at a higher price, which decreases the price at that exchange. This process continues until the price at both exchanges matches.

Traders can take advantage of arbitrage opportunities by using bots, known as arbitrageurs, to automatically buy and sell tokens. Arbitrageurs are the main reason why DEX prices are accurate. If the price at one exchange is significantly different from the price at another exchange, arbitrageurs will take advantage of this opportunity and bring the prices back into alignment.

### Arbitrage profitability

The likeliness of arbitrageurs bringing the prices back into alignment is influenced by profitability. The more profitable the arbitrage opportunity, the more likely arbitrageurs will take advantage of it. The profitability of an arbitrage opportunity is influenced by the fees at the exchanges and the chain's transaction fees. The lower the fees, the more profitable the arbitrage opportunity, and the more likely arbitrageurs will take advantage of it.

The fees are divided into two parts: a variable fee (the trading fee) and a somewhat fixed fee (the transaction cost). The variable fee is a percentage of the amount traded. The transaction cost is somewhat fixed because the transaction consumes a constant amount of gas, but the cost of gas changes based on network demand.

#### Transaction fees

This _fixed_ cost can make it unprofitable to arbitrage small amounts of tokens. Say there's a 10% price difference, but the liquidity is so low that the arbitrage opportunity will only yield $1 of profit. If the transaction cost exceeds this, the arbitrage opportunity will be unprofitable. On the other hand, if the liquidity is high enough such that the arbitrage opportunity will yield $100 of profit, the $10 transaction fee will bring profit down to $90, which is still profitable. Hence, the higher the liquidity of the pool, the more likely the arbitrage opportunity will be profitable, and thus take place.

#### Trading fees

The _variable_ fee is a percentage of the amount traded, paid to the liquidity providers, and possibly to the exchange itself. If the price is different between exchanges by, say, 1%, and the trading fee is 1%, then the arbitrage opportunity will be unprofitable. Only when the trading fee is less than the price difference may the arbitrage opportunity be profitable. The lower the trading fees, the less of a price difference is needed to make the arbitrage opportunity profitable.

### Accessibility

Finally, the accessibility of the exchanges is a factor in the accuracy of DEX prices. The more accessible the exchanges, the greater the number of arbitrageurs who can take advantage of arbitrage opportunities. The more arbitrageurs that can take advantage of arbitrage opportunities, the more likely the prices will be accurate.

Thankfully, the DEXs that Adrastia aggregates are all permissionless and accessible to anyone. Everyone can take advantage of arbitrage opportunities and thus bring the prices back into alignment.

### Conclusion

DEX prices are accurate because arbitrageurs take advantage of arbitrage opportunities. Fees and liquidity influence the profitability of arbitrage opportunities. The higher the liquidity of the pool and the lower the fees, the more likely the arbitrage opportunity will be profitable and thus take place. Anyone can take advantage of arbitrage opportunities because the DEXs we aggregate are permissionless and accessible to everyone.

{% callout %}

Arbitrage bots keep DEX prices accurate. See [this video](https://www.youtube.com/watch?v=b3BcH5DvC-Q) for more information on arbitrage.

{% /callout %}

## Incentivizing updaters

The second part of the economics of Adrastia is incentivizing updaters. How do we ensure that people update our price feeds with limited delay, and how do we prevent them from trying to manipulate our feeds?

The solution isn't ready yet, but it's coming. Price feeds are currently maintained exclusively by the Adrastia team, namely, TRILEZ SOFTWARE INC. In the meantime, we'll briefly explain how we plan to incentivize updaters. We'll release more detailed information at a later time. See our [roadmap](/fundamentals/roadmap) for more information.

### Staking

To ensure that our updaters remain honest, we plan to use staking. Staking is a mechanism that allows users to lock up tokens in exchange for certain rights. In our case, we plan to allow users to lock up tokens in exchange for the right to update our price feeds (and get paid). Any attempts at manipulation will be punished by slashing the staked tokens.

### Incentives

After staking tokens, users can deploy updater bots to update our price feeds. Updaters will be paid by our incentives contract when they perform successful updates. Anyone wanting to [pay for a price feed](/price-feeds/sponsoring) can send tokens to our incentives contract.