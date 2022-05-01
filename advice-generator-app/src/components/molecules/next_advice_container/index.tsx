import { FC } from "react";
import { Container } from "./styles";
import { NextAdviceContainerProps } from "./types";

const NextAdviceContainer: FC<NextAdviceContainerProps> = ({
  getNextAdvice
}) => {
  return (
    <Container>
      <div
        onClick={() => getNextAdvice()}
      />
    </Container>
  )
}

export default NextAdviceContainer