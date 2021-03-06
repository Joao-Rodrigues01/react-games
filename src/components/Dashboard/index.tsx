import { FaPlayCircle, FaThLarge, FaThList } from 'react-icons/fa';
import { Container, Header, TitleContent, Content } from './styles';

import SearchBar from '../SearchBar';
import Profile from '../Profile';

import api from '../../services/api';

import { useEffect, useState } from 'react';
import { FiPlayCircle } from 'react-icons/fi';


interface Game {
  id: string;
  name: string;
  image_url: string;
  platform: string;
}

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect( ()=> {
    api.get<Game[]>('/games').then(response=> {
      setGames(response.data);
    });
  }, []);

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

          <div>
              <div>
                <label>Showing:</label>
                <select>
                  <option>All Platforms</option>
                  <option>Playstation</option>
                  <option>Xbox</option>
                  <option>Nintendo</option>
                </select>
              </div>
              
              <div>
                <label>Sort by:</label>
                <select>
                  <option>Last played</option>
                  <option>Alphabetic</option>
                </select>  
              </div>
            
            <div>
                  <FaThLarge />
                  <FaThList />
            </div>
                       
          </div>
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
