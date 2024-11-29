import CustomButton from '../CustomButton/CustomButton';

import css from './BonusOffer.module.css';

export default function BonusOffer() {
  return (
    <section id="bonuses" className={css.section}>
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

      <div className={css.bonusDescriptionContainer}>
        <h2 className={css.bonusDescriptionTitle}>100&#37; up to 300&#8364;</h2>
        <p className={css.bonusDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
          volutpat cras elementum. Eget ultrices donec urna tellus duis
          ullamcorper consequat. Enim nunc neque tristique adipiscing varius sit
          tristique. Sit parturient eget pharetra, suspendisse. Turpis ut odio
          lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna in neque
          tristi
        </p>
      </div>
    </section>
  );
}
