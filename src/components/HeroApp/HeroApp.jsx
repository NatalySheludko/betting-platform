import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import CustomButton from '../CustomButton/CustomButton';

import css from './HeroApp.module.css';

export default function HeroApp() {
  const getActiveClass = ({ isActive }) => {
    return clsx(css.appHeroLink, isActive && css.active);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave.svg"
          alt="Decorative Wave"
          className={css.appWaveDecoration}
        />
        <img
          src="/images/decorative-bg/poker-symb-1x.png"
          srcSet="
	  /images/decorative-bg/poker-symb-1x.png 1x, /images/decorative-bg/poker-symb-2x.png 2x"
          alt="Decorative Poker Carts Symbols"
          className={css.appCartsSymbDecoration}
        />
        <img
          src="/images/decorative-bg/bet-1x.png"
          srcSet="
	  /images/decorative-bg/bet-1x.png 1x, /images/decorative-bg/bet-2x.png 2x"
          alt="Decorative Mobile Bets"
          className={css.appBetsDecoration}
        />

        <ul className={css.appHeroMenu}>
          <li className={css.appHeroMenuItem}>
            <NavLink to="/" className={getActiveClass}>
              <p>Home</p>
            </NavLink>
          </li>
          <li className={css.appHeroMenuItem}>
            <NavLink to="/app" className={getActiveClass}>
              <p>App</p>
            </NavLink>
          </li>
        </ul>

        <div className={css.appHeroContentWrap}>
          <h1 className={css.appHeroTitle}>
            lorem ipsum dolor sit amet, consectetur adipiscing
          </h1>
          <CustomButton
            className={css.appHeroCustomBtn}
            variant="default"
            size="large"
          >
            sign up
          </CustomButton>
          <p className={css.appHeroLegalDisclaimer}>
            18+ T&C apply &#124; Play Responsibly
          </p>
        </div>
      </div>
    </section>
  );
}
