import { useCallback, useEffect, useRef, useState, FormEvent } from 'react';
import { FaPlayCircle, FaThLarge, FaThList } from 'react-icons/fa';
import { Container, Header, TitleContent, Content } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import SearchBar from '../SearchBar';
import Profile from '../Profile';
import Select from '../Select';

import api from '../../services/api';

interface Game {
  id: string;
  name: string;
  image_url: string;
  platform: string;
}

export default function Dashboard() {
  const formRef= useRef<FormHandles>(null);
  
  const [games, setGames] = useState<Game[]>([]);
  const [platform, setPlatform] = useState('');


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

        <div>
            <SearchBar />
            <Profile />
        </div>
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
           <div key={game.id}>
              <span className="game-name">
                {game.name}
                <FaPlayCircle size={24} />
              </span>
              <img  src={game.image_url} alt={game.name}/>
          </div>
          ))}

      </Content>
    </Container>
  )
}
