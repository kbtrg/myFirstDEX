import React from 'react'

import { Box, Spacer, Flex } from '@chakra-ui/react'

export const DisplayExchangeRate = () => {
  return (
    <>
      <Flex my='15px'>
        <Box>Exchange Rate</Box>
        <Spacer></Spacer>
        <Box>1ETH = 3000 DAI</Box>
      </Flex>
    </>
  )
}
