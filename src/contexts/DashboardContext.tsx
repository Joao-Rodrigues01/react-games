import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { createContext, ReactNode, useState } from 'react';

import DownloadModal from '../components/DownloadModal';

interface DashboardContextData {
  isDownloadModalOpen: boolean;
  handleModal: (isOpen: boolean, gameName?: string) => void;
  games: Game[];
  setGames: Dispatch<SetStateAction<Game[]>>;
}

interface DashboardProviderProps {
  children: ReactNode;
}

interface Game {
  id?: string;
  name: string;
  image_url?: string;
  platform?: string;
  is_installed?: boolean;
  // arrumar esses ?
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({children, ...rest}: DashboardProviderProps ) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [gameName, setGameName] = useState('');
  const [games, setGames] = useState<Game[]>([]);


  function handleModal(isOpen: boolean, gameName: string) {
    setIsDownloadModalOpen(isOpen);
    setGameName(gameName)
  }

  return (
    <DashboardContext.Provider 
      value={{
        handleModal,
        isDownloadModalOpen,
        games,
        setGames,
      }}
    >
      {children}

      <DownloadModal gameName={gameName}/>
    </DashboardContext.Provider>
  )
}