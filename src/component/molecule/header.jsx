import React from 'react'

import { HeaderTitle } from '../atom/block/headerTitle'
import { ConnectButton } from '../atom/button/connectButton'

import { Flex, Spacer } from '@chakra-ui/react'

export const Header = () => {
  return (
    <>
      <Flex h='60px'>
        <HeaderTitle></HeaderTitle>
        <Spacer></Spacer>
        <ConnectButton></ConnectButton>
      </Flex>
    </>
  )
}
