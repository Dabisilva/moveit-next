import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 85.5%;
  }
}

body {
  background: var(--background);
  color: var(--text);
}

body,
input,
textarea,
button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

a {
  color: inherit;
  text-decoration: none;
}


:root{
      ${(props) => {
        let theme = props.theme;

        let themeArray = Object.entries(theme);

        let append = "";
        themeArray.map(([prop, value]) => {
          append += `--${prop}: ${value};`;
        });

        return append;
      }}
    }
`;
