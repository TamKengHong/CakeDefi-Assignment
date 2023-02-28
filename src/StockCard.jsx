import { Box, Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function getActiveNodes(arr, symbol) {
  return arr.filter(x => x.coin.toUpperCase() === symbol.toUpperCase() && x.status === "ACTIVE").length
}

const CardTop = (coinData) => {
  const imageUrl = coinData.image.large
  return (
    <HStack ml="3" spacing="3" height="70px" alignItems="center">
      <Image boxSize="50px" src={imageUrl} />
      <Text fontSize="xl" fontWeight="bold"> {coinData.name} </Text>
      <Text> {`(${coinData.symbol.toUpperCase()})`} </Text>
    </HStack>
  )
}

const CardBody = (coinData) => {
  const nodeSize = 1000
  const [totalActiveNodes, setTotalActiveNodes] = useState(0)

  useEffect(() => {
    fetch("https://api.cakedefi.com/nodes?order=status&orderBy=DESC")
      .then(res => res.json())
      .then(data => setTotalActiveNodes(getActiveNodes(data, coinData?.symbol)))
  }, [])

  const symbol = coinData.symbol.toUpperCase()
  const coinUsdValue = coinData.market_data.current_price.usd
  const coinSgdValue = coinData.market_data.current_price.sgd
  const [choiceValue, setChoiceValue] = useState(coinUsdValue)
  const [choiceCurrency, setChoiceCurrency] = useState("USD")
  const totalValue = totalActiveNodes * nodeSize * choiceValue

  function updateChoice(newVal, newCurrency) {
    setChoiceValue(newVal)
    setChoiceCurrency(newCurrency)
  }

  return (
    <Flex flexDirection="column" justifyContent="space-between" borderTop="1px solid rgba(0,0,0,0.2)" height="150px">
      <Box marginY="auto" marginLeft="5">
        {`Total ${choiceCurrency} value: $${totalValue.toLocaleString('en-US')}  (1 ${coinData.symbol} = $${choiceValue} ${choiceCurrency})`}
        <br />
        {`Total AUM: ${totalActiveNodes * nodeSize} ${symbol}`}
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

export const StockCard = () => {
  const [coinData, setCoinData] = useState(null)
  const id = "bitcoin"

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoinData(data))
  }, [])

  if (!coinData) {
    return <div>Loading...</div>
  }

  return (
    <Stack
      spacing="0"
      minWidth="500px"
      border="1px solid rgba(0,0,0,0.2)"
      bg="white"
      boxShadow="rgb(0 0 0 / 4%) 0px 8px 16px 0px"
      borderRadius="8px"
    >
      <CardTop {...coinData} />
      <CardBody {...coinData} />
    </Stack>
  )
}


