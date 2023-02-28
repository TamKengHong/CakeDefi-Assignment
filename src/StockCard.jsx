import { Box, Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

const dummyCoinData = {
  symbol: "Dash",
  name: "Dash",
  image: { large: "https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930" },
  market_data: {
    current_price: {
      sgd: 96.89,
      usd: 71.86
    }
  }
}

const dummyNodeData = [{ coin: "Ether", status: "ACTIVE" },
{ coin: "DeFi", status: "ACTIVE" },
{ coin: "Dash", status: "ACTIVE" },
{ coin: "Dash", status: "ACTIVE" }]

function getActiveNodes(arr, symbol) {
  return arr.filter(x => x.coin.toUpperCase() === symbol.toUpperCase() && x.status === "ACTIVE").length
}

const CardTop = () => {
  const imageUrl = dummyCoinData.image.large;
  return (
    <HStack ml="3" spacing="3" height="70px" alignItems="center">
      <Image boxSize="50px" src={imageUrl} />
      <Text fontSize="xl" fontWeight="bold"> {dummyCoinData.name} </Text>
      <Text> {"(" + dummyCoinData.symbol + ")"} </Text>
    </HStack>
  )
}

const CardBody = () => {
  const nodeSize = 1000
  const totalActiveNodes = getActiveNodes(dummyNodeData, "DASH")
  const coinUsdValue = dummyCoinData.market_data.current_price.usd
  const coinSgdValue = dummyCoinData.market_data.current_price.sgd
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
        {"Total " + choiceCurrency + " value: $" + totalValue}
      </Box>
      <Box mt="3" mb="5">
        <Button onClick={() => updateChoice(coinUsdValue, "USD")} ml="5" border="1px solid rgba(0,0,0,0.1)" bgColor="#f1e9fe" textColor="rgb(100, 0, 255)">USD</Button>
        <Button onClick={() => updateChoice(coinSgdValue, "SGD")} ml="5" border="1px solid rgba(0,0,0,0.15)" bgColor="white" textColor="rgb(100,0,255)">SGD</Button>
      </Box>
    </Flex>
  )
}


export const StockCard = () => {
  return (
    <Stack spacing="0" minWidth="500px" border="1px solid rgba(0,0,0,0.2)" bg="white" boxShadow="rgb(0 0 0 / 4%) 0px 8px 16px 0px" borderRadius="8px">
      <CardTop />
      <CardBody />
    </Stack>
  )
}
