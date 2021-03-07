import styled from 'styled-components';

export const Container = styled.div`  
label {
    font-weight: 400;
  }

  select {
    font-size: 1rem;
    font: 500 1rem "Jost", sans-serif;
    background: none;
    border: 0;
    color: var(--text);
    margin-right: 0.8rem;
    cursor: pointer;
  }

  select option {
    color: var(--text);
    background: #3A4261;

  }
`;