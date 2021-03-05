import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiRotateCw, 
  FiPlusCircle, 
  FiArrowDownCircle, 
} from 'react-icons/fi';

import { FaTag } from 'react-icons/fa';

import { IoMdGlobe } from 'react-icons/io';

import { Container, Header, List, Section, Tags, Footer } from './styles';

export default function SideMenu() {
  return ( 
    <Container>
      <Header>
        <img src="/logo-games.png" alt="imagem de um joystick"/>
        <div>
          <FiArrowLeft size={18} color="#FFF"/>
          <FiArrowRight size={18} color="#FFF"/>
          <FiRotateCw size={18} color="#FFF"/>
        </div>
      </Header>

      <Section>
        <List>
          <ul>
            <li>My Hub</li>  
            <li>All Games</li>  
            <li>Installed</li>  
            <li>Not Installed</li>  
            <li>+Add Games</li>  
          </ul>  
        </List> 

        <Tags>
          <span>TAGS</span>
          <ul>
            <li>
              <FaTag size={12} color="#25C85E"/>
              Co-op
            </li>
            <li>
              <FaTag size={12} color="#00FF38"/>
              House Party
            </li>
            <li>
              <FaTag size={12} color="#6A45D3"/>
              Scenic & Relaxing
            </li>
            <li>
              <FaTag size={12} color="#ad5858"/>
              Strategy
            </li>
            <li>
              <FaTag size={12} color="#2CAB48"/>
              Multiplayer
            </li>
            <li>
              <FaTag size={12} color="#5E5E70"/>
              See All/Manage Tags
            </li>
          </ul>
        </Tags> 
      </Section>

      <Footer>
        <a href="#">
          <FiPlusCircle size={18} color="#FFF"/>
          Connect a Device
        </a>
        <a href="#">
          <FiArrowDownCircle size={18} color="#FFF"/>
          Downloads
        </a>
        <a href="#">
          <IoMdGlobe size={18} color="#2CAB48"/>
          Ready for Straming
        </a>
      </Footer>
    </Container>
  )
}
