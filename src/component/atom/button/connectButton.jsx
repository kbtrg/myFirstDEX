import React from 'react'

import { Button } from '@chakra-ui/react'
import { connectWallet } from '../../../fook/connectWallet'

export const ConnectButton = () => {
  const [text, setText] = React.useState('Connect Wallet')
  const handleConnectWallet = () => connectWallet()
  return (
    <>
      <Button mt='10px' mr='20px' colorScheme={'green'}>
        {text}
      </Button>
    </>
  )
}
