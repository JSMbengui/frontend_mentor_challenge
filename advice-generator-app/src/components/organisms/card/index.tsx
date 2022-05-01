import CardBody from "@components/molecules/card_body";
import CardHeader from "@components/molecules/card_header";
import Divider from "@components/molecules/divider";
import NextAdviceContainer from "@components/molecules/next_advice_container";

import { FC } from "react";
import { Section } from "./styles";

import { CardProps } from "./types";

const Card: FC<CardProps> = ({
  advice,
  getNextAdvice
}) => {
  return (
    <Section>
      <CardHeader
        adviceId={advice.id}
      />

      <CardBody
        title={advice.title}
      />

      <Divider />

      <NextAdviceContainer
        getNextAdvice={getNextAdvice}
      />
    </Section>
  )
}

export default Card