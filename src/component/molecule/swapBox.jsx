import React from 'react'

import { Box, Center } from '@chakra-ui/react'

import { InputAmountBox } from '../atom/input/inputAmountBox'
import { OutputAmountBox } from '../atom/input/outputAmountBox'
import { SwapArrow } from '../atom/button/swapArrow'
import { SwapButton } from '../atom/button/swapButton'

export const SwapBox = () => {
  const [inputAmount, setInputAmount] = React.useState(0)
  const handleInputAmount = (value) => {
    setInputAmount(value)
  }
  //console.log(inputAmount)

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
        <Box w='500px' mb='100px' p='30px' bg='white'>
          <Box fontSize='30px' fontWeight='600' mb='50px'>
            Swap
          </Box>
          <InputAmountBox
            handleInputAmount={handleInputAmount}
          ></InputAmountBox>
          <Center>
            <SwapArrow></SwapArrow>
          </Center>
          <OutputAmountBox inputAmount={inputAmount}></OutputAmountBox>
          <SwapButton></SwapButton>
        </Box>
      </Box>
    </>
  )
}

// InputAmountBoxから受け取ったinputAmountを、OutputAmountBoxに渡したい。。
