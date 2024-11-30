import CustomButton from '../CustomButton/CustomButton';
import { FaStar } from 'react-icons/fa';

import css from './Hero.module.css';

export default function Hero() {
  const stars = Array(5).fill(null);

  return (
    <section id="sign-up" className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave-sharp.svg"
          alt="Decorative Wave"
          className={css.heroWaveDecoration}
        />
        <img
          src="/images/decorative-bg/player-1x.png"
          srcSet="
	  /images/decorative-bg/player-1x.png 1x, /images/decorative-bg/player-2x.png 2x"
          alt="Decorative Player"
          className={css.heroPlayerDecoration}
        />

        <div className={css.heroRatingWrap}>
          <span className={css.heroScore}>96&#47;100</span>
          <span className={css.heroRating}>
            {stars.map((_, index) => (
              <FaStar
                key={index}
                className={css.heroRatingIcon}
                aria-label={`Star ${index + 1}`}
              />
            ))}
          </span>
        </div>

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
