import { Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CardTop } from "./CardTop"
import { CardBody } from "./CardBody"

export const Card = ({ id, nodeSize }) => {
  const [coinData, setCoinData] = useState(null)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoinData(data))
  }, [id])

  if (!coinData || "error" in coinData) {
    return <div>Loading / Error</div>
  }

  return (
    <Stack
      spacing="0"
      width="500px"
      border="1px solid rgba(0,0,0,0.2)"
      bg="white"
      boxShadow="rgb(0 0 0 / 6%) 0px 8px 16px 0px"
      borderRadius="8px"
    >
      <CardTop {...coinData} />
      <CardBody {...coinData} nodeSize={nodeSize} />
    </Stack>
  )
}
