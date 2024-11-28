import { Link } from 'react-router-dom';

import { menuItems } from '../../utils';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className={css.navigationMenu}>
          {menuItems.map(({ text, icon, alt }, index) => (
            <li key={index} className={css.navigationMenuItem}>
              <Link className={css.navigationMenuLink}>
                <img
                  className={css.navigationMenuLinkIcon}
                  src={icon}
                  alt={alt}
                />
                <span className={css.navigationMenuLinkText}>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
