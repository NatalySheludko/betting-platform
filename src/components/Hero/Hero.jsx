import CustomButton from '../CustomButton/CustomButton';
import { FaStar } from 'react-icons/fa';

import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <img
          src="/images/radial-waves-decoration/wave-sharp.svg"
          alt="Decorative Wave"
          className={css.heroWaveDecoration}
        />
        <img
          src="/images/decorative-bg/player-1x.png"
          alt="Decorative Player"
          className={css.heroPlayerDecoration}
        />

        <div className={css.heroRatingWrap}>
          <span className={css.heroScore}>96&#47;100</span>
          <span className={css.heroRating}>
            <FaStar className={css.heroRatingIcon} aria-label="Star" />
          </span>
				</div>
				
        <div className={css.heroContent}>
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
