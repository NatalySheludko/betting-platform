import CustomButton from '../CustomButton/CustomButton';
import Logo from '../Logo/Logo';

import css from './AppStore.module.css';

export default function AppStore() {
  return (
    <section id="bonuses" className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave-thin.svg"
          alt="Decorative Wave"
          className={css.storeWaveDecoration}
        />

        <div className={css.storeContentWrap}>
          <CustomButton
            className={css.bonusCustomBtn}
            variant="default"
            size="largest"
          >
            download app
          </CustomButton>
          <Logo size="medium" />
          <ul className={css.storeMenuBadge}>
            <li className={css.menuBadgeItem}>
              <img
                src="/images/apple-store.svg"
                className={css.storeBadge}
                alt="Apple store badge"
              />
            </li>
            <li className={css.menuBadgeItem}>
              <img
                src="/images/play-store.svg"
                className={css.storeBadge}
                alt="Play store badge"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
