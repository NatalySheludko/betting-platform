import CustomButton from '../CustomButton/CustomButton';

import css from './BonusOffer.module.css';

export default function BonusOffer() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave-classic.svg"
          alt="Decorative Wave"
          className={css.bonusWaveDecoration}
        />
        <img
          src="/images/decorative-bg/circle-1x.png"
          srcSet="
					/images/decorative-bg/circle-1x.png 1x, /images/decorative-bg/circle-2x.png 2x"
          alt="Decorative Circle"
          className={css.bonusCircleDecoration}
        />
        <img
          src="/images/decorative-bg/poker-1x.png"
          srcSet="
					/images/decorative-bg/poker-1x.png 1x, /images/decorative-bg/poker-2x.png 2x"
          alt="Poker Card"
          className={css.bonusCardDecoration}
        />

        <div className={css.bonusContent}>
          <h2 className={css.bonusTitle}>100&#37; BONUS UP TO 300&#8364;</h2>
          <h2 className={css.bonusText}>
            &#43;100 free spins on your first deposit
          </h2>
          <CustomButton
            className={css.bonusCustomBtn}
            variant="default"
            size="large"
          >
            get a bonus now
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
