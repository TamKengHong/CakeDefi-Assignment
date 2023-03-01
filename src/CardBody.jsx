import { Flex, Box, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function getActiveNodes(arr, symbol) {
  if (symbol === "DFI") { // for symbol compatibility from CoinGecko to CakeDefi API.
    symbol = "DEFI"
  } else if (symbol === "ETH") {
    symbol = "ETHER"
  }
  return arr.filter(x => x.coin.toUpperCase() === symbol && x.status === "ACTIVE").length
}

export const CardBody = ({ symbol, market_data, nodeSize }) => {
  const [totalActiveNodes, setTotalActiveNodes] = useState(0)
  const coinSymbol = symbol.toUpperCase()
  const coinUsdValue = market_data.current_price.usd
  const coinSgdValue = market_data.current_price.sgd
  const [choiceValue, setChoiceValue] = useState(coinUsdValue)
  const [choiceCurrency, setChoiceCurrency] = useState("USD")
  const totalValue = totalActiveNodes * nodeSize * choiceValue

  function updateChoice(newVal, newCurrency) {
    setChoiceValue(newVal)
    setChoiceCurrency(newCurrency)
  }

  useEffect(() => {
    fetch("https://api.cakedefi.com/nodes?order=status&orderBy=DESC")
      .then(res => res.json())
      .then(data => setTotalActiveNodes(getActiveNodes(data, coinSymbol)))
    updateChoice(coinUsdValue, "USD")
  }, [coinSymbol, coinUsdValue])

  return (
    <Flex flexDirection="column" justifyContent="space-between" borderTop="1px solid rgba(0,0,0,0.2)" height="150px">
      <Box marginY="auto" marginLeft="5">
        {`Total ${choiceCurrency} value: $${totalValue.toLocaleString('en-US')}  (1 ${coinSymbol} = $${choiceValue.toLocaleString('en-US')} ${choiceCurrency})`}
        <br />
        {`Total AUM: ${(totalActiveNodes * nodeSize).toLocaleString('en-US')} ${coinSymbol}`}
      </Box>
      <Box mt="1" mb="5">
        <Button
          onClick={() => updateChoice(coinUsdValue, "USD")}
          ml="5"
          border="1px solid rgba(0,0,0,0.1)"
          bgColor="#f1e9fe"
          textColor="rgb(100, 0, 255)">
          USD
        </Button>
        <Button
          onClick={() => updateChoice(coinSgdValue, "SGD")}
          ml="5"
          border="1px solid rgba(0,0,0,0.15)"
          bgColor="white"
          textColor="rgb(100,0,255)">
          SGD
        </Button>
      </Box>
    </Flex>
  )
}
