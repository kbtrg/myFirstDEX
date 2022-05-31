import React from 'react'

import { Box, Center } from '@chakra-ui/react'

import { InputAmountBox } from '../atom/input/inputAmountBox'
import { SwapArrow } from '../atom/button/swapArrow'
import { DisplayExchangeRate } from '../atom/block/displayExchangeRate'
import { SwapButton } from '../atom/button/swapButton'

export const SwapBox = () => {
  return (
    <>
      <Box
        h='100%'
        w='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg='#ebfff0'
      >
        <Box w={500} mb='100px' p='30px' bg='white'>
          <Box fontSize='30px' fontWeight='600' mb='50px'>
            Swap
          </Box>
          <InputAmountBox></InputAmountBox>
          <Center>
            <SwapArrow></SwapArrow>
          </Center>
          <InputAmountBox></InputAmountBox>
          <DisplayExchangeRate></DisplayExchangeRate>
          <SwapButton></SwapButton>
        </Box>
      </Box>
    </>
  )
}
