import Link from 'next/link';
// import { useRouter } from 'next/router';

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
import React from 'react';

export default function SideMenu() {

  // const router = useRouter();

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
            <li>
              <Link href="#"> My Hub </Link>
            </li> 

            <li>
              <Link href="/">All Games </Link>
            </li> 

            <li>
              <Link href="/installed">Installed </Link>
            </li> 

            <li>
              <Link href="/not-installed">Not Installed </Link>
            </li>  

            <li>
              <a href="#">+Add Games </a>
            </li>  
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
          Ready for Streaming
        </a>
      </Footer>
    </Container>
  )
}
