import Paragraph from "@components/atoms/paragraph";
import { FC } from "react";
import { Header } from "./styles";
import { CardHeaderProps } from "./types";

const CardHeader: FC<CardHeaderProps> = ({
  adviceId
}) => {
  return (
    <Header>
      <Paragraph text={`ADVICE # ${adviceId}`} />
    </Header>
  )
}

export default CardHeader