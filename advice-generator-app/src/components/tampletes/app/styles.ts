import { ThemeInterface } from "@assets/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => (theme as ThemeInterface).colors.darkBlue};
  color: ${({theme}) => (theme as ThemeInterface).colors.lightCyan};
  display: flex;
  justify-content: center;
  align-items: center;
`