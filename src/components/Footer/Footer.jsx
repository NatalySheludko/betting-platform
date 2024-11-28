import Logo from '../Logo/Logo';

import css from '../Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footerSection}>
      <div className={css.container}>
        <div className={css.footerContextWrap}>
          <p className={css.footerContext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
            volutpat cras elementum. Eget ultrices donec urna tellus duis
            ullamcorper consequat. Enim nunc neque tristique adipiscing varius
            sit tristique. Sit parturient eget pharetra, suspendisse. Turpis ut
            odio lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna
            in neque tristi
          </p>
          <span className={css.footerResponsiblySymbol}>18&#43;</span>
        </div>
        <p className={css.footerContext}>
          Gambling can be addictive. Play responsibly.
        </p>
        <ul className={css.footerMenu}>
          <li className={css.footerMenuItem}>
            <Logo size="medium" />
          </li>
          <li className={css.footerMenuItem}>
            <Logo size="large" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
