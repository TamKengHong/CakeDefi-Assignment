import { Flex, Spacer, Box, Text, Button, Input, Center } from "@chakra-ui/react"
import { useState } from "react"
import { Card } from "./Card"

export const CardSelector = () => {
  const [formId, setFormId] = useState()
  const [formNodeSize, setFormNodeSize] = useState()
  const [id, setId] = useState("ethereum")
  const [nodeSize, setNodeSize] = useState(100)

  function submit() {
    if (formId) {
      setId(formId.toLowerCase())
    }
    if (formNodeSize) {
      setNodeSize(formNodeSize)
    }
  }
  return (
    <Flex mt="35px">
      <Spacer />
      <Box
        width="500px"
        border="1px solid rgba(0,0,0,0.2)"
        bg="white"
        boxShadow="rgb(0 0 0 / 6%) 0px 8px 16px 0px"
        borderRadius="8px">
        <Text p="2" borderBottom="1px solid rgba(0,0,0,0.2)">
          Description:
          <br />
          Type in the coin id and node size to see the changes on your right!
        </Text>
        <Box mt="2">
          <Input
            onChange={(e) => setFormId(e.target.value)}
            borderColor="gray.300"
            m="3"
            width="auto"
            placeholder="Coin id: (CoinGecko)" />
          <Input
            onChange={(e) => setFormNodeSize(e.target.value)}
            borderColor="gray.300"
            m="3"
            width="auto"
            placeholder="Node size: (a number)" />
          <Center mt="10px">
            <Button
              onClick={() => submit()}
              width="200px"
              border="1px solid rgba(0,0,0,0.1)"
              bgColor="#f1e9fe"
              textColor="rgb(100, 0, 255)">
              Submit
            </Button>
          </Center>
        </Box>
      </Box>
      <Spacer />
      <Card id={id} nodeSize={nodeSize} />
      <Spacer />
    </Flex>
  )
}
