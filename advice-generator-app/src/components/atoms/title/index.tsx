import { FC } from "react";

import { StyleHeader } from "./styles";

const Title: FC<{ text: string }> = ({ text }) => {
  return <StyleHeader>"{text}"</StyleHeader>
}

export default Title