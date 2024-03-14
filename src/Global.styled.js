import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
  }
  body {
    font-size: inherit;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.slateGrey};
    background-color: ${({ theme }) => theme.colors.charcoalGrey};
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default GlobalStyles;
