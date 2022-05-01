import Card from "@components/organisms/card"
import { getNewAdvice } from "@helpers/get_new_advice"

import { FC, useState } from "react"

import { Container } from "./styles"

import { AdviceType, AppProps } from "./types"

const App: FC<AppProps> = ({
  advice
}) => {
  const [currentAdvice, setCurrentAdvice] = useState<AdviceType>(advice)

  async function getNextAdvice() {
    try {
      const newAdvice = await getNewAdvice()

      setCurrentAdvice(newAdvice)
    } catch (err) { }
  }

  return (
    <Container>
      <Card
        advice={currentAdvice}
        getNextAdvice={getNextAdvice}
      />
    </Container>
  )
}

export default App