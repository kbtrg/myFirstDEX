import Web3 from 'web3'

// coingekkoのAPIを用いて価格取得

export const getPrice = async () => {
  const daiData = await (
    await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=eth'
    )
  ).json()

  const compData = await (
    await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=compound-governance-token&vs_currencies=eth'
    )
  ).json()

  const linkData = await (
    await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=eth'
    )
  ).json()

  return {
    daiEth: daiData.dai.eth,
    compEth: compData['compound-governance-token'].eth,
    linkEth: linkData.chainlink.eth,
  }
}
