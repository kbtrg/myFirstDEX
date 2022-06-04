import React from 'react'

import { TestSwap } from './component/templete/testSwapPage'
import { getPrice } from '../src/fook/getPrice'

function App() {
  // Get price by reffering coingekko API
  React.useEffect(() => {
    const f = async () => {
      const priceData = await getPrice()
      console.dir(priceData)
    }
    f()
  }, [])

  return (
    <>
      <TestSwap></TestSwap>
    </>
  )
}

export default App
