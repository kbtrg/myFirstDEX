import React from 'react'

import { Input, Stack, InputGroup, Select } from '@chakra-ui/react'

export const InputAmountBox = () => {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <Input bg='white' type='tel' placeholder='0.00' />
          <Select w='200px'>
            <option value='none'></option>
            <option value='ETH'>ETH</option>
            <option value='DAI'>DAI</option>
            <option value='COMP'>COMP</option>
            <option value='LINK'>LINK</option>
          </Select>
        </InputGroup>
      </Stack>
    </>
  )
}
