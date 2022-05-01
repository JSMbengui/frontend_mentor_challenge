import { ThemeInterface } from "@assets/theme";
import styled from "styled-components";

export const Section = styled.div`
  background-color: ${({theme}) => (theme as ThemeInterface).colors.darkGrayishBlue};
  width: 90%;
  display: flex;
  justity-content:center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 2%;

  @media(min-width: 680px) {
    width: 60%;
  }
`