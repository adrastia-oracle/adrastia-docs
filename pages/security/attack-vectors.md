---
title: Attack Vectors
---

# {% $markdoc.frontmatter.title %}

## Overview

There are two ways to attack Adrastia price feeds:
1. Manipulating DEX prices
2. Denial-of-service

## Manipulating DEX prices

### Attack plan

Since Adrastia reads and stores prices from DEXs, the only way to manipulate the prices that Adrastia reports is to manipulate the DEXs. The steps required are as follows for each and every price accumulator:
1. **Manipulate the pool price**: Swap either the token or the quote token in the DEX pool that the price accumulator tracks. The amount swapped must be so large that it moves the price.
2. **Update the price accumulator**: Submit an update transaction for the price accumulator so that it records the manipulated price.

The more liquidity in the pool, the more it costs to move the price. At the time of writing, it costs $27M to manipulate the price of ETH by -10% at the Uniswap v3 USDC-WETH 0.3%-fee pool. This is expensive, but can't we swap back after submitting an update transaction to the price accumulator?

{% callout %}
Arbitrageurs provide security by fixing any price discrepancies for a profit.
{% /callout %}

There's a very high chance that an arbitrage (more generally, MEV) bot will buy the cheap ETH (or other token) and sell it to other pools, DEXs, CEXs, etc. for a profit. This will happen immediately after our swap transaction as many bots compete for easy money like this. As a result, our update transaction to the price accumulator won't see the manipulated price.

There are two ways to prevent arbitragers from foiling our attack:
1. Smart contracts: Carry out the attack in a single transaction with a smart contract.
2. Flashbots: Send the transactions straight to a miner while avoiding the mempool.

The first way to carry out the attack won't work because:
{% callout %}
Only EOAs can perform accumulator updates. Smart contracts are not able to update. Furthermore, flash loans cannot be used.
{% /callout %}

This leaves the use of flashbots to carry out the attack the only way we'll be able to recover [most of] the funds used for the attack. By reducing the cost of attack, the chances of an attack being performed increase. If it ever becomes profitable to carry out an attack, we can expect someone to do so. So how do we mitigate this attack vector?

### Mitigation

This attack vector can be mitigated in two ways:
1. **Aggregate more pools and DEXs**: The more pools and DEXs we aggregate, the higher the cost to attack.
2. **Use time-weighted average prices (TWAPs)**: Requiring attacks to be carried out for streches of time greatly increases the cost to attack.

### Further protections

#### Access controls

To further prevent attacks like these from playing out, we put access controls on the update functions of our accumulators. This limits who is able to carry out an attack.

However, it should be noted that these access controls bring about their own risks. If everyone with the power to update our accumulators colludes, it's possible to manipulate the price feeds over extended periods of time for cheap. Note that this does require upfront capital to move the prices at each and every pool/DEX, and remember that flash loans cannot be used.

If we have at least one honest updater, the attack becomes much more expensive as a fight is carried out. The honest updater corrects the price and the dishonest updater carries out the attack again to manipulate the price.

Assuming at least one honest updater, the costs of an attack is as follows. Each attack (or rather, hit) costs dual swap fees - once to swap to manipulate the price, then again to recover the funds. Assuming 0.3% swap fees, this comes out to 0.6% fees per hit. At the time of writing, updates occur at a 10-30 second delay from the moment they are needed. So at least two hits must be performed every minute. This brings us to 1.2% fees per minute. Using a standard 30 minute TWAP period, this brings the cost of attack to at least 36% of the amount that needs to be swapped to manipulate the price. This cost of attack is further increased when we consider that the price is only manipulated for half of the time (assuming a 1:1 ratio of honest and dishonest updates). This is on top of the implicit cost of reputation damage, possible legal repercussions, and gas fees.

{% callout %}
The presence of at least one honest updater amplifies the cost of attack.
{% /callout %}

#### On-chain validation

It's possible to front-run accumulator update transactions so that manipulated data is observed and stored by our smart contracts. We prevent this by performing on-chain validation. Our updater bots read the pool/DEX values (whether price or liquidity) of the latest valid block, and include this in the update transaction data. Updates are only performed if the values at the time of execution match the values provided as of at least one block prior. This ensures it's not possible to front-run our accumulator update transactions.

{% callout %}
Accumulator update transactions validate that the data being recorded holds for at least two blocks.
{% /callout %}

#### Off-chain validation

To further mitigate attacks, our updater bots consult off-chain prices before submitting accumulator update transactions.

{% callout %}
Update transactions are submitted **only if** on-chain prices closely match off-chain prices.
{% /callout %}

### Further reading and resources

Michael Bentley of Euler Labs wrote a paper titled [Manipulating Uniswap v3 TWAP Oracles](https://github.com/adrastia-oracle/uni-v3-twap-manipulation/blob/master/cost-of-attack.pdf) which is very relevant to this attack vector.

Euler Labs has created a tool to analyze the costs and impacts of manipulating Uniswap v3 oracles that is [available here](https://oracle.euler.finance/). While Adrastia doesn't use Uniswap v3 oracles, it's a useful tool to estimate attack costs and risks.

## Denial-of-service

### Attack plan

It's possible to perform a DoS attack by front-running our update transactions in such a way that they fail to carry out updates.

Our intermediate and top level oracles require all underlying components to be up-to-date, namely our accumulators.

Let's consider our intermediate oracles that implement `PeriodicAccumulationOracle`. They require that either:
1. The accumulators have been updated within the last period, or
2. The accumulators do not need updates.

Otherwise, the intermediate oracles will not be able to update. So to perform a DoS attack on one of our intermediate oracles, we must:
1. Ensure that the accumulators are not able to perform updates, and
2. Front-run the intermediate oracle updates to trick the accumulators into thinking they need updates

This can be done by manipulating either the price accumulator, as described above, or the liquidity accumulator. The prices or liquidity levels must be manipulated by more than the accumulators' respective update thresholds.

To perform a DoS attack on our top level oracles, this DoS attack must be performed on all of their underlying intermediate oracles.

### Mitigation

Mitigation of this attack vector can be done at both the consumer level and the updater level.

At the consumer level,
{% callout %}
Specify a maximum age of the consultation's observation to prevent outdated data from being consumed. Consider using a fallback oracle when data is stale.
{% /callout %}

At the updater level,
{% callout %}
Submit update transactions directly to miners while avoiding the public mempool to avoid being front-run.
{% /callout %}