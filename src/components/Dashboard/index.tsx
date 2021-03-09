import { useCallback, useEffect, useRef, useState, FormEvent, useContext } from 'react';
import { FaArrowCircleDown, FaPlayCircle, FaThLarge, FaThList } from 'react-icons/fa';
import { Container, Header, TitleContent, Content } from './styles';
import { FaSearch } from 'react-icons/fa';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { DashboardContext } from '../../contexts/DashboardContext';

import SearchBar from '../SearchBar';
import Profile from '../Profile';
import Select from '../Select';


import api from '../../services/api';

interface Game {
  id: string;
  name: string;
  image_url: string;
  platform: string;
  is_installed: boolean;
}

export default function Dashboard() {
  const { handleModal, games, setGames } = useContext(DashboardContext);

  const formRef= useRef<FormHandles>(null);
  

  const [platform, setPlatform] = useState('');
  const [searchedGames, setSearchedGames] = useState('');


  useEffect(()=> {
    formRef.current.submitForm();
  }, [platform]);

  useEffect(()=> {
    api.get<Game[]>('/games').then(response=> {
      setGames(response.data);
    });
    
  }, []);

  const searchByPlatform = useCallback(async (data: FormEvent) => {
    const response = await api.get('/platform', {
      params: {
        platform,
      }
    });
    
    setGames(response.data);
  }, [platform]);
  
  const searchByName = useCallback(async (data: FormEvent) => {

      if(searchedGames === '') {
        return;
      }
    const response = await api.get(`/games/name/?name=${searchedGames}`);

    setGames(response.data);
  }, [searchedGames]);


  return ( 
    <Container>
      <Header>
        <div>
          <a>Home</a>
          <a>Party</a>
          <a>Rewind</a>
          <a>News</a>
          <a>Settings</a>
        </div>

        <Form ref={formRef} onSubmit={searchByName}>
            <SearchBar 
              name="search-game"
              onChange={(e) => {
                setSearchedGames(e.target.value);
              }}
              required
            >
              <FaSearch 
                size={14} 
                color="#B9B9C4" 
                onClick={searchByName}
              />
            </SearchBar>
            <Profile />
        </Form>
      </Header>

      <TitleContent>
          <h1>All Games ({games.length})</h1>

          <Form ref={formRef} onSubmit={searchByPlatform}>
              <Select 
                name="platform"
                label="Showing:"
                value={platform}
                onChange={(e) => {
                  setPlatform(e.target.value);
                }}
                options={[
                  { value: 'Multiplatform', label: 'All Platforms' },
                  { value: 'Playstation', label: 'Playstation' },
                  { value: 'Xbox', label: 'Xbox' },
                  { value: 'Nintendo', label: 'Nintendo' },
                ]}
              />

              <Select
                name="sortby"
                label="Sort by:"
                value="sortby"
                onChange={() => {}}
                options={[
                  { value: 'Last played', label: 'Last played' },
                  { value: 'Alphabetic', label: 'Alphabetic' },
                ]}>
              </Select>
            <div>
                  <FaThLarge />
                  <FaThList />
            </div>
                       
          </Form>
      </TitleContent>

     
      
      <Content>
          {games.map(game => (
            
               game.is_installed ? (

                <div  key={game.id}>
                  <span className="game-name">
                    {game.name}
                    <FaPlayCircle size={24} />
                  </span>
                  <img  src={game.image_url} alt={game.name}/>
                </div>

              ) : (

                <div 
                  key={game.id} 
                  className="game-not-installed" 
                  onClick={() => handleModal(true, game.name)}
                >
                  <span>
                    <FaArrowCircleDown size={28} color="#FFF" />
                  </span>
                  <img src={game.image_url}
                    alt={game.name} 
                  />
              </div>
              )
          
          ))}

    
      </Content>
    </Container>
  )
}
