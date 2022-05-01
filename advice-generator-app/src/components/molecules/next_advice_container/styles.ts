import { ThemeInterface } from "@assets/theme";
import styled from "styled-components";

export const Container = styled.div`
  div {
    position: relative;
    top: 30px;
    background-color: ${({theme}) => (theme as ThemeInterface).colors.neonGreen};
    background-image: url(/assets/images/icon-dice.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    padding: 2%;

    &:hover {
      box-shadow: 0px 0px 20px ${({theme}) => (theme as ThemeInterface).colors.neonGreen};
    }
  }

`