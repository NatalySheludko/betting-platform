import { useState } from 'react';
import { IoIosGift } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi';

import Logo from '../Logo/Logo';
import LangDropdown from '../LangDropdown/LangDropdown';
import CustomButton from '../CustomButton/CustomButton';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';

import css from '../Header/Header.module.css';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prevState) => !prevState);
  };

  return (
    <div className={css.container}>
      <div className={css.navContainer}>
        <div className={css.mainNavWrapper}>
          <nav className={css.pageNav}>
            <Logo size="small" />

            <button
              className={css.burgerButton}
              onClick={toggleBurgerMenu}
              aria-label={isBurgerOpen ? 'Close menu' : 'Open menu'}
            >
              {isBurgerOpen ? <FiX /> : <FiMenu />}
            </button>

            <ul
              className={`${css.navMenu} ${
                isBurgerOpen ? css.navMenuOpen : ''
              }`}
            >
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
              <HeaderNavLink
                to="/"
                label="sports"
                textClass={css.navMenuText}
              />
              <HeaderNavLink to="/" label="more" textClass={css.navMenuText} />
            </ul>
          </nav>

          <ul
            className={`${css.navOptions} ${
              isBurgerOpen ? css.navOptionsOpen : ''
            }`}
          >
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
    </div>
  );
}
