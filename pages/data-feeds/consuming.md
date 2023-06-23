---
title: Consuming Data Feeds
description: Learn how to consume Adrastia data feeds.
---

# {% $markdoc.frontmatter.title %}

## Overview

This is a quick guide to consuming data feeds from Adrastia. Find the address of the data feed you want to consume, then use the interface or ABI to interact with the contract.

If you're only interested in consuming prices, use the [`IPriceOracle`](https://github.com/adrastia-oracle/adrastia-core/blob/main/contracts/interfaces/IPriceOracle.sol) interface. If you're only interested in consuming liquidity levels, use the [`ILiquidityOracle`](https://github.com/adrastia-oracle/adrastia-core/blob/main/contracts/interfaces/ILiquidityOracle.sol) interface. If you're interested in both, use the [`IOracle`](https://github.com/adrastia-oracle/adrastia-core/blob/main/contracts/interfaces/IOracle.sol) interface.

For each interface, there are two consult methods. One takes the asset address as the sole parameter, and the other takes the asset address and the maximum age of the consultation observation (in seconds) as parameters. The latter is useful for applications that want to ensure the data feed is up-to-date, and we recommend using it when freshness is essential. Keep in mind that specifying a maximum age of zero (0) will always return the value(s) as of the latest block, which may not be secure, and is also costly in gas.

## Finding data feeds

Refer to one of the deployments pages or our web app to find the address of the data feed contract for the asset you want to consume. Please review the performance, underlying liquidity, and other metrics of the data feed before using it in your application.

{% callout %}
Be careful when using price feeds that have low liquidity, as they may be vulnerable to manipulation or inaccuracy.
{% /callout %}

## Consulting data feeds

Adrastia's data feeds are available on-chain as smart contracts. Interacting with them is just like interacting with any other smart contract. They can be accessed on-chain through smart contracts or off-chain through JSON-RPC calls.

### Import the ABIs and interfaces

#### Node.js and Solidity

The easiest way of implementing Adrastia data feeds is to install the core node package:

```bash
# With npm
npm install @adrastia-oracle/adrastia-core

# With yarn
yarn add @adrastia-oracle/adrastia-core
```

After installing the package, the ABIs are available in the `node_modules/@adrastia-oracle/adrastia-core/artifacts/contracts` directory and the interfaces are available in the `node_modules/@adrastia-oracle/adrastia-core/contracts/interfaces` directory.

#### Other languages

Please use the Node.js package mentioned above to download and copy the ABIs. We'll make a mirror of these ABIs in the future.

### Interacting with the contracts

#### Solidity

Import the interfaces into your project and interact with the contracts like any other smart contract. While concrete implementations of the contracts are available, it's best practice to use the lowest level interface.

The following is an example of how to interact with the price feed contracts in Solidity:

```solidity
import '@adrastia-oracle/adrastia-core/contracts/interfaces/IPriceOracle.sol';

contract PriceConsumer {
  IPriceOracle oracle;

  constructor(address oracleAddress) {
    require(oracleAddress != address(0), 'PriceConsumer: oracle address is zero');
    oracle = IPriceOracle(oracleAddress);
  }

  function doSomethingWithPriceOf(address token) external {
    uint112 price;

    // Gets the price of `token` with the requirement that the price is 2 hours old or less
    try oracle.consultPrice(token, 2 hours) returns (uint112 adrastiaPrice) {
      price = adrastiaPrice;
    } catch Error(string memory) {
      // High-level error - maybe the price is older than 2 hours... use fallback oracle
      ...
    } catch (bytes memory) {
      // Low-level error... use fallback oracle
      ...
    }

    require(price != 0, "MISSING_PRICE");
    // We have our price, now let's use it
    ...
  }
}
```

#### Node.js

You'll likely want to use a JSON-RPC library to interact with the contracts. We recommend [ethers.js](https://docs.ethers.io/).

The following is an example of how to interact with the price feed contracts with ethers.js:

```javascript
const { ethers } = require("ethers");
const priceOracleAbi = require("@adrastia-oracle/adrastia-core/artifacts/contracts/interfaces/IPriceOracle.sol/IPriceOracle.json").abi;

async function main() {
  const provider = ...; // Your provider
  const oracleAddress = ...; // The address of the price oracle contract

  const oracle = new ethers.Contract(oracleAddress, priceOracleAbi, provider);

  const assetAddress = ...; // The address of the asset you want to get the price of
  const maxAge = 60 * 60 * 2; // 2 hours (in seconds) max age

  const price = await oracle['consultPrice(address,uint256)'](assetAddress, maxAge);

  console.log("Raw price =", price.toString());

  const quoteTokenDecimals = await oracle.quoteTokenDecimals();

  console.log("Price =", ethers.utils.formatUnits(price, quoteTokenDecimals)); // Human-readable price
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

#### Other languages

We recommend finding a JSON-RPC library for your language of choice. Use the ABIs to interact with the contracts.