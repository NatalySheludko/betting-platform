import css from './BonusDescription.module.css';

export default function BonusDescription() {
  return (
    <section className={css.section}>
      <div className={css.container}>
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
