import { useEffect } from 'react'
import Web3 from 'web3'

let buyMode = true
let web3, user

export const connectWallet = async () => {
  // メタマスクを確認して、Web3インスタンス生成
  if (window.ethereum) {
    web3 = new Web3(Web3.givenProvider)
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requsetAccounts',
    })
    user = accounts[0]
  } catch (error) {
    alert(error.message)
  }
}
