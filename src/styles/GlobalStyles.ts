import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;

  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
   
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,h1,h2,h3,h4,h5 {
    color: ${p => p.theme.text};
  }



  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .MuiPaper-root {
    background-color: ${props => props.theme.boxBackgroundLighter};
    color: ${props => props.theme.selectPreviewText};
  }
`;
