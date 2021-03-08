import { createContext, ReactNode, useState } from 'react';

import DownloadModal from '../components/DownloadModal';

interface DashboardContextData {
  isDownloadModalOpen: boolean;
  handleModal: (isOpen: boolean, gameName?: string) => void;
}

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({children, ...rest}: DashboardProviderProps ) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [gameName, setGameName] = useState('');

  function handleModal(isOpen: boolean, gameName: string) {
    setIsDownloadModalOpen(isOpen);
    setGameName(gameName)
  }

  return (
    <DashboardContext.Provider 
      value={{
        handleModal,
        isDownloadModalOpen
      }}
    >
      {children}

      {isDownloadModalOpen && <DownloadModal gameName={gameName}/>}
    </DashboardContext.Provider>
  )
}