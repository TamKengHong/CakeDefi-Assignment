import { VStack } from '@chakra-ui/react'
import { StockCard } from './StockCard'

export const StockList = () => {
  const AAPL = { ticker: "AAPL", fullName: "Apple Inc. Comm...", currPrice: 161.50, absChange: -4.92, percentChange: -3.05 }
  const stockArr = [AAPL]
  return (
    <VStack spacing="0">
      {stockArr ? stockArr.map(obj => <StockCard {...obj} />) : null}
    </VStack>
  )
}
