import { useContext, useRef } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';

import { Container, Modal, ButtonContainer } from './styles';

interface DownloadModalProps {
  gameName: string;
}

export default function DownloadModal({ gameName }: DownloadModalProps){
  const formRef = useRef<FormHandles>(null);

  
  const { handleModal, isDownloadModalOpen, setGames, games } = useContext(DashboardContext);

  async function handleInstallSubmit() {
    await api.patch(`/games/?name=${gameName}`).then(response => {

      const findGameIndex = games.findIndex(game =>  game.name === response.data.name);

      games[findGameIndex] = response.data;
     
      setGames([...games]);
    });

    handleModal(false);   
  };
  
  return (
    <Container isDownloadModalOpen={isDownloadModalOpen} >
      <Modal>
          <h2>Deseja instalar "{gameName}" ?</h2>
          <ButtonContainer>
            <Form ref={formRef} onSubmit={handleInstallSubmit}>
              <button type="submit" >Instalar</button>
            </Form>
            <button type="button" onClick={() => handleModal(false)}>Cancelar</button>
          </ButtonContainer>
      </Modal>
    </Container>
  )
}