import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav className={s.header}>
    <NavLink
      to="/"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Phonebook
    </NavLink>
    <NavLink
      to="/nextpage"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Secondpage
    </NavLink>
  </nav>
);

export default Navigation;
