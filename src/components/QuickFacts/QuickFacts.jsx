import { factsItems } from '../../utils';

import css from './QuickFacts.module.css';

export default function QuickFacts() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.factsTitle}>quick facts</h2>
        <ul className={css.factsMenu}>
          {factsItems.map((item, index) => (
            <li key={index} className={css.factsMenuItem}>
              <span className={css.menuItemEmoji}>{item.emoji}</span>
              <h3 className={css.menuItemTitle}>{item.title}</h3>
              <p className={css.menuItemText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
