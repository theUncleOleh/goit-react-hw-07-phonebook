import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav className={s.header}>
    <NavLink
      to="/"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Create contact
    </NavLink>
    <NavLink
      to="/list"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Contact list
    </NavLink>
  </nav>
);

export default Navigation;
