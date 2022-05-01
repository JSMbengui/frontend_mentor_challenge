import styled from "styled-components";

export const DividerContainer = styled.footer`
  background-image: url(/assets/images/pattern-divider-mobile.svg);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 100%;
  height: 20px;

  @media(min-width: 680px) {
    background-image: url(/assets/images/pattern-divider-desktop.svg);
  }
`