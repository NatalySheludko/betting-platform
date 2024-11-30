import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import CustomButton from '../CustomButton/CustomButton';

import css from './HeroBonus.module.css';

export default function HeroBonus() {
  const getActiveClass = ({ isActive }) => {
    return clsx(css.heroLink, isActive && css.active);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave.svg"
          alt="Decorative Wave"
          className={css.heroWaveDecoration}
        />
        <img
          src="/images/decorative-bg/slot-1x.png"
          srcSet="
	  /images/decorative-bg/slot-1x.png 1x, /images/decorative-bg/slot-2x.png 2x"
          alt="Decorative Casino Slot"
          className={css.heroSlotDecoration}
        />

        <ul className={css.heroMenu}>
          <li className={css.heroMenuItem}>
            <NavLink to="/" className={getActiveClass}>
              <p>Home</p>
            </NavLink>
          </li>
          <li className={css.heroMenuItem}>
            <NavLink to="/bonus" className={getActiveClass}>
              <p>Bonus</p>
            </NavLink>
          </li>
        </ul>

        <div className={css.heroContentWrap}>
          <h1 className={css.heroTitle}>
            lorem ipsum dolor sit amet, consectetur adipiscing
          </h1>
          <CustomButton
            className={css.heroCustomBtn}
            variant="default"
            size="large"
          >
            sign up
          </CustomButton>
          <p className={css.heroLegalDisclaimer}>
            18+ T&C apply &#124; Play Responsibly
          </p>
        </div>
      </div>
    </section>
  );
}
