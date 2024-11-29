import CustomButton from '../CustomButton/CustomButton';

import css from './SportsbookDetails.module.css';

export default function SportbookDetails() {
  return (
    <section id="review" className={css.section}>
      <div className={css.container}>
        <div className={css.sportsbookWrap}>
          <h2 className={css.sportsbookTitle}>sportsbook review</h2>
          <ul className={css.sportsbookMenu}>
            <li className={css.sportsbookMenuItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus, in dapibus imperdiet quis eget.
                Curabitur semper volutpat cras elementum. Eget ultrices donec
                urna tellus duis ullamcorper consequat. Enim nunc neque
                tristique adipiscing varius sit tristique. Sit parturient eget
                pharetra, suspendisse. Turpis ut odio lorem sapien congue.
                Pulvinar id in mollis faucibus ut. Magna in neque tristi
              </p>
            </li>
            <li className={css.sportsbookMenuItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus, in dapibus imperdiet quis eget.
                Curabitur semper volutpat cras elementum. Eget ultrices donec
                urna tellus duis ullamcorper consequat. Enim nunc neque
                tristique adipiscing varius sit tristique. Sit parturient eget
                pharetra, suspendisse. Turpis ut odio lorem sapien congue.
                Pulvinar id in mollis faucibus ut. Magna in neque tristi
              </p>
            </li>
          </ul>
        </div>
        <div className={css.lineupWrap}>
          <h2 className={css.sportsbookTitle}>lineup of the sports</h2>
          <p className={css.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
            volutpat cras elementum. Eget ultrices donec urna tellus duis
            ullamcorper consequat. Enim nunc neque tristique adipiscing varius
            sit tristique. Sit parturient eget pharetra, suspendisse. Turpis ut
            odio lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna
            in neque tristi
          </p>
        </div>
        <div className={css.betTypesWrap}>
          <h2 className={css.sportsbookTitle}>betting types</h2>
          <p className={css.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
            volutpat cras elementum. Eget ultrices donec urna tellus duis
            ullamcorper consequat. Enim nunc neque tristique adipiscing varius
            sit tristique. Sit parturient eget pharetra, suspendisse. Turpis ut
            odio lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna
            in neque tristi
          </p>
        </div>
        <div className={css.liveBetWrap}>
          <h2 className={css.sportsbookTitle}>live betting</h2>
          <ul className={css.liveBetMenu}>
            <li className={css.liveBetMenuItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus, in dapibus imperdiet quis eget.
              </p>
            </li>
            <li className={css.liveBetMenuItem}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className={css.liveBetMenuItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus.
              </p>
            </li>
          </ul>
          <ol className={css.liveBetMenu}>
            <li className={css.liveBetMenuItemDecimal}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus, in dapibus imperdiet quis eget.
              </p>
            </li>
            <li className={css.liveBetMenuItemDecimal}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className={css.liveBetMenuItemDecimal}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat egestas eget purus.
              </p>
            </li>
          </ol>
          <p className={css.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
            volutpat cras elementum. Eget ultrices donec urna tellus duis
            ullamcorper consequat. Enim nunc neque tristique adipiscing varius
            sit tristique. Sit parturient eget pharetra, suspendisse. Turpis ut
            odio lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna
            in neque tristi
          </p>
          <CustomButton variant="default" size="small">
            sign up
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
