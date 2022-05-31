import React from 'react'

import { Box } from '@chakra-ui/react'

import { Header } from '../molecule/header'
import { SwapBox } from '../molecule/swapBox'

export const TestSwap = () => {
  return (
    <>
      <Box h='100vh'>
        <Header></Header>
        <SwapBox></SwapBox>
      </Box>
    </>
  )
}
