---
layout: post
title:  "Exchanges and Tokens"
date:   2018-05-31 18:08:59 +0530
categories: exchanges
---

Getting listed on an exchange is a big thing for most coins and it costs them a lot. Popular opinion is that the exchanges take advantage of the massive amount of money that these coins raise, hence prompting the premium tag. But one has to go through the steps involved for an exchange to list any coin. In the first example, lets take a "normal" coin (not ERC20 / 721 tokens) and analyse what might be needed for these exchanges to list them.

1. Install the coins daemon and sync the node to the current state. Assuming the size of the blockchain/DAG takes a maximum of 200GB here (btc's limit)
2. Get the API to sync up to their proprietary handles and test stuff. Shouldn't take space, but takes time.
3. All set

In this scenario, the exchange needs to allocate some extra server space, secure that and make sure that it keeps running, etc. Let's say they use a top end server off amazon's AWS service. On average, we can assume this to cost them about $1000 in server space and assuming that one person is in charge of ten coins on average, we can assume an extra $1k in wages. This brings the raw cost up to $2000 for this coin. Say the exchange itself wants a 25% premium on this, this comes to about $2400. On to ERC20 tokens,

1. Add ERC20 token to sync with main ETH chain
2. Add custom wallet "features"
3. All set

In this case, it costs the exchange *nothing* to list these coins because they already have an archival ETH node running to process other ERC20 tokens. At most, it should cost them some extra Gs of storage, so lets assume that this tops off at $100. Now, ERC20 tokens don't need a separate person to administer, so there is no extra personnel cost. Still, say one person manages 10ERC20 tokens, so on average, we need $1000 extra to handle this.  This brings the total cost to $1200 (50% of the cost of listing a standalone coin).

So from the above calculations, you clearly see that it doesn't cost and exchange more than $28k a year to list a standalone coin and it doesn't cost them more than $14k to list an ERC20 token. But is that all?

One major factor that people don't take into consideration while making these calculations are the market making bots and the matching engines. When you make a trade for selling 1SMC, the exchange matches your order against a person who is willing to buy 1SMC. This engine can be the same for all coins, but it requires that an exchange run a separate service for each coin. And if its going to be a *competent* exchange, it shouldn't have more than one of these bots on a server. Still, we assume they are incompetent and have two coins on a single server and this brings an additional cost of $1000 a month(assuming a $2000/mo server). Apart from this are the market making bots and several of these bots may exist, so let's assume that these bots cost $1000 a month to maintain. Overall, the cost from these two things are $2000 a month.

At this point people maybe thinking, what about the profits that the exchange gets? The truth is that exchanges don't make much money off alts. Lets assume you have a coin SCAMCoin worth $0.1. If the average amount of the trade in SCAMCoin is 100SCAM and the exchange makes 1% off it, the exchange makes 1 cent off every tx made. So this means that for an alt to be profitable, it must have high volume against its trading pairs, but we don't consider this because for all the exchange knows, your coin could bomb.

And all this consideration doesn't take the inherent risk involved in trading in alts such as 51% attacks and double spending, which can't be quantified coin wise, although we could say that they would expect a 4x factor of safety while handling them. Oh, and we need a customer service guy to dedicate his tiem for your coin. 5 people per coin, this amounts to $20k a year (assuming an avg salary of 100k)

Counting all the factors above, we get the costs for
1. Listing a coin as 4400*4 / month +20k for CS = $231200 a year
2. Listing an ERC20 token 3200*4 / month + 20k for CS = $173000 a year

Assuming your SCAMCoin has an average lifetime of say 2 years, you're looking at $460k for listing a coin and $350k a for listing an ERC20 token over its lifetime. This matches with the official number quoted by many exchanges, suggesting that the exchanges that ask for these amounts of money seem to follow these practices or they simply want profits at the cost of added risk, which will backfire at some point, as shown be recent exchange hacks. Note that this is an upper bound, which means that any exchange that asks you for more money than this is simply ripping you off. Or they have less people working on a single coin, which would mean they are more competent, although I don't think that's the practice. Still, a general formula for an exchange listing should be:

```
Price of listing = ((Server Cost + Security Cost + people/coin) * premium + (Cost of Bots/coin) * Number of bots) * fos + HR personnel cost
```
