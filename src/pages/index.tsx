import Dashboard from '../components/Dashboard';
import SideMenu from '../components/SideMenu';
import { DashboardProvider } from '../contexts/DashboardContext';


import { Container } from '../styles/pages/Home';

export default function Home() {
  return ( 
    <Container>
        <SideMenu />
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider>
    </Container>
  )
}
