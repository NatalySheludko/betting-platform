import { IoIosGift } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';

import Logo from '../Logo/Logo';
import LangDropdown from '../LangDropdown/LangDropdown';
import CustomButton from '../CustomButton/CustomButton';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';

import css from '../Header/Header.module.css';

export default function Header() {
  return (
    <div className={css.container}>
      <div className={css.navContainer}>
        <nav className={css.pageNav}>
          <Logo size="small" />
          <ul className={css.navMenu}>
            <HeaderNavLink
              to="/bonus"
              icon={IoIosGift}
              label="bonus"
              iconClass={css.iconGift}
              textClass={css.navMenuText}
            />
            <HeaderNavLink
              to="/app"
              icon={MdOutlinePhoneIphone}
              label="app"
              iconClass={css.iconIPhone}
              textClass={css.navMenuText}
            />
            <HeaderNavLink to="/" label="live" textClass={css.navMenuText} />
            <HeaderNavLink to="/" label="sports" textClass={css.navMenuText} />
            <HeaderNavLink to="/" label="more" textClass={css.navMenuText} />
          </ul>
        </nav>

        <ul className={css.navOptions}>
          <li className={css.langSelector}>
            <LangDropdown />
          </li>
          <li className={css.navOptionsItem}>
            <CustomButton size="small" variant="default">
              sign up
            </CustomButton>
          </li>
          <li className={css.navOptionsItem}>
            <CustomButton size="small" variant="another">
              log in
            </CustomButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
