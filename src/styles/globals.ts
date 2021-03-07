import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --primary-background: #0C0F27;
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
  color: var(--text);
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--secondary-background);
}

::-webkit-scrollbar-thumb {
  background: transparent;
  border: 1px solid #717383;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #23253A;
}

`;