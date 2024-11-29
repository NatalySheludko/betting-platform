import { menuItems } from '../../utils';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className={css.navigationMenu}>
          {menuItems.map(({ text, icon, alt, href }, index) => (
            <li key={index} className={css.navigationMenuItem}>
              <a href={href} className={css.navigationMenuLink}>
                <img
                  className={css.navigationMenuLinkIcon}
                  src={icon}
                  alt={alt}
                />
                <span className={css.navigationMenuLinkText}>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
