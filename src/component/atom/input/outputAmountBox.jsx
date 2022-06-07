import React from 'react'
import { Input, Stack, InputGroup, Select } from '@chakra-ui/react'

import { getPrice } from '../../../fook/getPrice'

export const OutputAmountBox = (props) => {
  let priceData
  console.log(props.inputAmount)

  // Get price by reffering coingekko API
  React.useEffect(() => {
    const f = async () => {
      priceData = await getPrice()

      switch (token) {
        case 'DAI':
          setOutputAmount(props.inputAmount / priceData.daiEth)
          break
        case 'COMP':
          setOutputAmount(props.inputAmount / priceData.compEth)
          break
        case 'Link':
          setOutputAmount(props.inputAmount / priceData.linkEth)
          break
      }
    }
    f()
  }, [])

  const [token, setToken] = React.useState('DAI')
  const handleSetToken = (_token) => {
    setToken(_token)
  }

  const [outputAmount, setOutputAmount] = React.useState(0)

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <Input
            bg='white'
            type='tel'
            placeholder='0.00'
            isReadOnly={true}
            value={outputAmount}
          />
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
