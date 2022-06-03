import React from 'react'

import { Button } from '@chakra-ui/react'
import { connectWallet } from '../../../fook/connectWallet'

export const ConnectButton = () => {
  const [text, setText] = React.useState('Connect Wallet')
  const handleConnectWallet = async () => {
    const user = await connectWallet()
    let shortText =
      user.substring(0, 3) +
      '...' +
      user.substring(user.length - 4, user.length)
    setText(shortText)
  }

  return (
    <>
      <Button
        mt='10px'
        mr='20px'
        colorScheme={'green'}
        onClick={handleConnectWallet}
      >
        {text}
      </Button>
    </>
  )
}
