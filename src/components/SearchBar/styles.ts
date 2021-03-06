import styled from 'styled-components';

export const Input = styled.div`
    width: 12rem;
    height: 2.2rem;

    border: 2px solid #35364A;
    border-radius: 1rem;

    svg {
      margin-left: 0.6rem;
    }

    input {
      width: 9rem;
      background: var(--primary-background);
      outline: none;

      ::placeholder {
        color: var(--text-placeholder);
      }
    } 
`;