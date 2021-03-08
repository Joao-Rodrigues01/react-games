import { useContext } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import { Container, Modal, ButtonContainer } from './styles';

interface DownloadModalProps {
  gameName: string;
}

export default function DownloadModal({ gameName }: DownloadModalProps){
  const { handleModal, isDownloadModalOpen } = useContext(DashboardContext);
  return (
    <Container isDownloadModalOpen={isDownloadModalOpen}>
      <Modal>
          <h2>Deseja instalar "{gameName}" ?</h2>
          <ButtonContainer>
            <button type="button">Instalar</button>
            <button type="button" onClick={() => handleModal(false)}>Cancelar</button>
          </ButtonContainer>
      </Modal>
    </Container>
  )
}