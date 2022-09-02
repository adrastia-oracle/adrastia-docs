---
title: Updaters
---

# {% $markdoc.frontmatter.title %}

## Overview

Oracles are updated by updater bots that constantly check for needed updates via the [IUpdateable](https://github.com/adrastia-oracle/adrastia-core/blob/main/contracts/interfaces/IUpdateable.sol) interface. The `canUpdate(bytes memory data)` function is called to determine if an update is needed (as per `needsUpdate(bytes memory data)`), if an update can be performed without reverting, and if the caller is authorized to perform an update. The `update(bytes memory data)` function is called to perform the update. The `data` parameter is a bytes array that can be used to pass in any additional information needed to perform the update.

## Who can update?

At the moment, the updating of our oracles is a fairly centralized process. The price and liquidity accumulators are access controlled to prevent price and liquidity values from being manipulated. Anyone can update the top level oracle contracts as long as the underlying components are up-to-date.

The Adrastia team, namely TRILEZ SOFTWARE INC., is currently the only entity that can update the accumulators. We are working on a decentralized solution, but it is not yet ready for production. See the [Roadmap](/fundamentals/roadmap) page for more information on the decentralized solution and the [Attack Vectors](/security/attack-vectors) page for more information on how the Adrastia team can perform attacks.

Note: Only EOAs can perform updates. Updates called from other smart contracts will revert to protect against manipulation such as flash loan attacks.

## Updating components

### Price accumulators

Price accumulators are updated by encoding the following information into a bytes array and passing it to the `update(bytes memory data)` function:
1. `address` of the token to update the price accumulator for
2. `uint112` of the price to perform a validation against

If the price passed by the updater bot is within half of the update threshold of the current price, the price accumulator will be updated. Otherwise, nothing will be updated.

{% callout %}
Prices passed via the data parameter are never stored on-chain. They are only used to validate that the on-chain price being recorded matches the price that the updater bot is seeing. This is to prevent manipulation by MEV bots.
{% /callout %}

### Liquidity accumulators

Liquidity accumulators are updated by encoding the following information into a bytes array and passing it to the `update(bytes memory data)` function:
1. `address` of the token to update the liquidity accumulator for
2. `uint112` of the token liquidity to perform a validation against
3. `uint112` of the quote token liquidity to perform a validation against

If the liquidity levels passed by the updater bot is within half of the update threshold of the current liquidity levels, the liquidity accumulator will be updated. Otherwise, nothing will be updated.

{% callout %}
Liquidities passed via the data parameter are never stored on-chain. They are only used to validate that the on-chain liquidity levels being recorded matches the liquidity levels that the updater bot is seeing. This is to prevent manipulation by MEV bots.
{% /callout %}

### Top level oracles

Our top level oracle contracts, namely `AggregatedOracle`, can be updated by anyone provided that the underlying components are up-to-date. The address of the token to update the oracle for is encoded and passed to the `update(bytes memory data)` function. This will then update all of the underlying oracles for the token as long as those oracles' accumulators are up-to-date.

{% callout %}
The underlying oracles can only be updated by the top level (aggregated) oracle so as to ensure that the underlying oracles are always in perfect alignment with the top level oracle.
{% /callout %}

## Updater bot structure

### Adrastia team updater bot infrastructure

It is of utmost importance that all oracle contracts and components are as up-to-date as possible. In order to ensure this, we have created a very redundant and fault tolerant system of updater bots. The structure of this system is as follows:
- A primary updater bot (or rather, series of updater bots) using a separate address for each and every price feed
  - Running on a self-managed dedicated server at a data center with N+2 redundancy and strict physical security
  - RPC providers are self-managed nodes, each running on their own powerful dedicated server at the same data center
  - Update checks are performed every 5 seconds
- A secondary updater bot (or rather, series of updater bots) using a separate address for each and every price feed
  - Running on a self-managed dedicated server at an alternate data center with N+2 redundancy and strict physical security
  - RPC providers are from the leading node providers
  - Update checks are performed every 10 seconds with a 30 second delay in submitting update transactions
- A tertiary updater bot using OpenZeppelin's Defender service and one address per chain
  - Update checks are performed every 60 seconds with a 45 second delay in submitting update transactions
- A quaternary updater bot using OpenZeppelin's Defender service and one address per chain
  - Update checks are performed every 60 seconds with a 90 second delay in submitting update transactions
  - Only critical updates are performed by this bot
    - Critical: when update requirements are surpassed by 50%

{% callout %}
See the Deployments section for the addresses of our updater bots.
{% /callout %}

### Community updater bot infrastructure

The Adrastia team, namely TRILEZ SOFTWARE INC., is currently the only entity that can update the accumulators. We are working on a decentralized solution, but it is not yet ready for production. See the [Roadmap](/fundamentals/roadmap) page for more information on the decentralized solution and the [Attack Vectors](/security/attack-vectors) page for more information on how the Adrastia team can perform attacks.

We are open to authorizing select community members to update our accumulators while we work on the decentralized solution. If you are interested in becoming an authorized updater, please reach out to us via our Discord server.

Everyone is welcome to run their own updater bots to update our top level oracles. Our updater bot code is open source and can be found on [GitHub](https://github.com/adrastia-oracle/adrastia-defender-autotasks). We are happy to provide support via our Discord server to anyone who is interested in running their own updater bots.