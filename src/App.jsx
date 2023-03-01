import { Text, Box } from "@chakra-ui/react"
import { CardList } from "./CardList"
import { CardSelector } from "./CardSelector"

export const App = () => (
  <Box bg="#f4f3f7" h="100vh">
    <Text pl="4" pt="40px" fontSize="2xl" fontWeight="bold">Masternode Assets:</Text>
    <CardList />
    <Text pl="4" pt="40px" fontSize="2xl" fontWeight="bold">Try it out!</Text>
    <CardSelector />
  </Box>
)
