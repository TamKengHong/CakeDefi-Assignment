import { HStack, Image, Text } from "@chakra-ui/react"

export const CardTop = (coinData) => {
  const imageUrl = coinData.image.large
  return (
    <HStack ml="3" spacing="3" height="70px" alignItems="center">
      <Image boxSize="40px" src={imageUrl} />
      <Text fontSize="xl" fontWeight="bold"> {coinData.name} </Text>
      <Text> {`(${coinData.symbol.toUpperCase()})`} </Text>
    </HStack>
  )
}
