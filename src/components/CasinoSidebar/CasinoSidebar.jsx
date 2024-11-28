import CustomButton from '../CustomButton/CustomButton';

import { sidebarItems } from '../../utils';

import css from './CasinoSidebar.module.css';

export default function CasinoSidebar() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.casinoSidebarTitle}>Casino</h2>

        <ul className={css.sidebarMenu}>
          {sidebarItems.map((item, index) => (
            <li key={index} className={css.sidebarMenuItem}>
              <img
                srcSet={item.srcSet}
                src={item.src}
                className={css.sidebarMenuItemImg}
                alt={item.alt}
              />
              {item.hasOverlay && (
                <div className={css.itemOverlay}>
                  <h2 className={css.itemWrapTitle}>well oil</h2>
                  <CustomButton
                    size="smaller"
                    className={css.itemWrapTransparentBtn}
                  >
                    Login
                  </CustomButton>
                  <span className={css.itemWrapText}>or</span>
                  <CustomButton
                    className={css.itemWrapCustomBtn}
                    size="smaller"
                    variant="default"
                  >
                    sign up
                  </CustomButton>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
