import { NavLink } from 'react-router-dom';

import css from './HeaderNavLink.module.css';

export default function HeaderNavLink({
  to,
  icon: Icon,
  label,
  iconClass,
  textClass,
}) {
  return (
    <li className={css.navMenuItem}>
      <NavLink to={to} className={css.navMenuLink}>
        {Icon && (
          <span>
            <Icon className={iconClass} aria-label={label} />
          </span>
        )}
        <span className={textClass}>{label}</span>
      </NavLink>
    </li>
  );
}
