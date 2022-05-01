import { ThemeInterface } from "@assets/theme";
import styled from "styled-components";

export const StyledParagrapth = styled.p`
  color: ${({theme}) => (theme as ThemeInterface).colors.neonGreen};
  font-size: 12px;
`