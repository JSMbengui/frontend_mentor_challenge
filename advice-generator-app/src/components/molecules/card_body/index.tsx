import Title from "@components/atoms/title";

import { FC } from "react";

import { Container } from "./styles";

import { CardBodyProps } from "./types";

const CardBody: FC<CardBodyProps> = ({
  title
}) => {
  return (
    <Container>
      <Title text={title} />
    </Container>
  )
}

export default CardBody