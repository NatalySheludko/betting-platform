import CustomButton from '../CustomButton/CustomButton';

import { bonusesList } from '../../utils';

import css from './BonusesList.module.css';

export default function BonusesList() {
  return (
    <section className={css.section}>
      <ul className={css.bonusesMenu}>
        {bonusesList.map(({ id, imgSrc, alt }) => (
          <li key={id} className={css.menuItemWrap}>
            <div className={css.container}>
              <div className={css.sportEquipmentWrap}>
                <img className={css.sportEquipmentImg} src={imgSrc} alt={alt} />
              </div>
              <div className={css.bonusesWrapper}>
                <h3 className={css.bonusesTitle}>bonus name</h3>
                <p className={css.bonusesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat egestas eget purus, in dapibus imperdiet quis eget.
                  Curabitur semper volutpat cras elementum. Eget ultrices donec
                  urna tellus duis ullamcorper consequat. Enim nunc neque
                  tristique adipiscing varius sit tristique.
                </p>

                <CustomButton variant="default" size="small">
                  Sign Up
                </CustomButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
