import { useLocation, useNavigate } from 'react-router-dom';
import s from './ButtonToBack.module.css';

export default function BackToTrendButton() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(navigate);
  const backToTrendButton = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <button type="button" onClick={backToTrendButton} className={s.button}>
      Previous page
    </button>
  );
}
