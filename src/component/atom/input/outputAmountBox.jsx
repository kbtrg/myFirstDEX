import React from 'react'
import { Input, Stack, InputGroup, Select } from '@chakra-ui/react'

import { getPrice } from '../../../fook/getPrice'

export const OutputAmountBox = (props) => {
  let priceData

  const [outputAmount, setOutputAmount] = React.useState(0)
  const [token, setToken] = React.useState('DAI')
  const handleSetToken = (_token) => {
    setToken(_token)
  }

  // coingekkoAPIで価格取得 & output価格計算
  React.useEffect(() => {
    const f = async () => {
      priceData = await getPrice()
      calcOutputAmount(token)
    }
    f()
  }, [props])

  const calcOutputAmount = (token) => {
    switch (token) {
      case 'DAI':
        setOutputAmount(
          Math.round((props.inputAmount / priceData.daiEth) * 100) / 100
        )
        break
      case 'COMP':
        setOutputAmount(
          Math.round((props.inputAmount / priceData.compEth) * 100) / 100
        )
        break
      case 'LINK':
        setOutputAmount(
          Math.round((props.inputAmount / priceData.linkEth) * 100) / 100
        )
        break
    }
  }

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <Input bg='white' type='tel' isReadOnly={true} value={outputAmount} />
          <Select
            w='200px'
            onChange={(event) => handleSetToken(event.target.value)}
          >
            <option value='DAI'>DAI</option>
            <option value='COMP'>COMP</option>
            <option value='LINK'>LINK</option>
          </Select>
        </InputGroup>
      </Stack>
    </>
  )
}
