import { ChakraProvider, Box, Center } from "@chakra-ui/react"
import { StockCard } from "./StockCard"
import { StockList } from "./StockList"

export const App = () => (
  <ChakraProvider>
    <Center bg="blue.100" h="100vh">
      <StockList />
    </Center>
  </ChakraProvider>
)
