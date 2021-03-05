import Dashboard from '../components/Dashboard';
import SideMenu from '../components/SideMenu';

import { Container } from '../styles/pages/Home';

export default function Home() {
  return ( 
    <Container>
        <SideMenu />
        <Dashboard />
    </Container>
  )
}
