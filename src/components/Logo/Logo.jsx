import { Link } from 'react-router-dom';

import css from '../Logo/Logo.module.css';

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <img
        width="120"
        height="55"
        src="/logo.svg" 
        alt="Logotype"
      />
    </Link>
  );
}
