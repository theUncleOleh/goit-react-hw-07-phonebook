import AppBar from '../AppBar/AppBar';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
export default function Layout() {
  return (
    <Container>
      <AppBar>
        <Navigation />
      </AppBar>
      <Outlet />
    </Container>
  );
}
