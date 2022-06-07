import React from 'react'
import { Input, Stack, InputGroup, Select } from '@chakra-ui/react'

export const InputAmountBox = (props) => {
  const handleInputAmount = (value) => {
    props.handleInputAmount(value)
  }

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <Input
            bg='white'
            type='tel'
            placeholder='0.00'
            onChange={(event) => handleInputAmount(event.target.value)}
          />
          <Select w='200px'>
            <option value='ETH'>ETH</option>
          </Select>
        </InputGroup>
      </Stack>
    </>
  )
}
