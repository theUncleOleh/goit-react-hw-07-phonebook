import s from './AppBar.module.css';
export default function AppBar({ children }) {
  return (
    <>
      <header className={s.header}>{children}</header>
    </>
  );
}
