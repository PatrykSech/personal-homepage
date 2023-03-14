import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.color.background};
  max-width: 1216px;
  margin: auto;
  padding: 14px;
  transition: all 0.25s ease;
}

html {
    box-sizing: border-box;
  }
  
  *,
  ::after, ::before {
    box-sizing: inherit;
  }
`;