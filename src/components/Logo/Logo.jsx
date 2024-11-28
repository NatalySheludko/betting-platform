import { Link } from 'react-router-dom';

import { LogoWrapper } from './Logo.styled';

import css from '../Logo/Logo.module.css';

export default function Logo({ size = 'small' }) {
  return (
    <LogoWrapper as={Link} to="/" size={size} className={css.logo}>
      logo
    </LogoWrapper>
  );
}
