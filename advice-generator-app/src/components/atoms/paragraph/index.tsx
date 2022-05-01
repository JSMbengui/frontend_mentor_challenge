import { FC } from "react";
import { StyledParagrapth } from "./styles";

const Paragraph: FC<{
  text: string
}> = ({ text }) => {
    return <StyledParagrapth>{text}</StyledParagrapth>
  }

export default Paragraph