import styled from 'styled-components';

interface ContainerProps {
  isDownloadModalOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: ${props => props.isDownloadModalOpen ? '0' : '-100%'};
    z-index: 3;
    background: rgba(0, 0, 0, 0.3);
    transition: bottom 0.4s;  
`;


export const Modal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 14.2rem;

  background: #1A1F36;
  border-radius: 1rem;

  h2 {
    font-weight: 400;
    color: #C8D5EA;
    font-size: 1.3rem;
    margin-bottom: 3rem;
    margin-top: 2rem; 
    max-width: 420px;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    width: 9.1rem;
    height: 2.85rem;
    border-radius: 0.9rem;
    color: #fff;
    font-size: 1.25rem;
    background: #2C304E;
    transition: opacity 0.3s;

    & + button {
      background: #23253A;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;