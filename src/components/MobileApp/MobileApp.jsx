import { Link } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';

import css from './MobileApp.module.css';

export default function MobileApp() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <p className={css.mobileAppText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
          volutpat cras elementum.
        </p>
        <Link to="/app" className={css.mobileAppLink}>
          <span>
            <FaApple className={css.iconApple} aria-label="Apple" />
          </span>
          <span>
            <DiAndroid className={css.iconAndroid} aria-label="Android" />
          </span>
          <span className={css.mobileAppLinkText}>mobile app</span>
        </Link>
      </div>
    </section>
  );
}
