import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --primary-background: #0C0F28;
  --secondary-background: #0C0D24;
  --text: #F5F4FC;
  --text-secondary: #E6E6EF;
  --text-placeholder: #B9B9C4;
  --hover: #23253A;
  --blue: #029AEB;
  --span: #717383;
}



body, input, button, textarea {
  font: 500 1rem "Jost", sans-serif;
	border: 0;
}

ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

`;