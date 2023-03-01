import { Center, Flex, Spacer, HStack } from '@chakra-ui/react'
import { Card } from './Card'

export const CardList = () => {
  return (
    <Flex mt="35px" spacing="5">
      <Spacer />
      <Card id="dash" nodeSize={1000} />
      <Spacer />
      <Card id="defichain" nodeSize={20000} />
      <Spacer />
    </Flex>
  )
}
