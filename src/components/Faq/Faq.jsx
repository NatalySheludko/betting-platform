import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { faqItems } from '../../utils';

import css from '../Faq/Faq.module.css';

export default function Faq({ contentWidth }) {
  const [openId, setOpenId] = useState([0, 1]);

  const openClickHandler = (id) => {
    setOpenId((prevOpenIds) => {
      if (prevOpenIds.includes(id)) {
        return prevOpenIds.filter((openId) => openId !== id);
      } else {
        return [...prevOpenIds, id];
      }
    });
  };

  return (
    <section className={css.section}>
      <div
        className={`${css.container} ${
          contentWidth === '925px' ? css.compact : css.wide
        }`}
      >
        <h2 className={css.faqTitle}>faq</h2>
        <ul className={css.faqMenu}>
          {faqItems.map((item, id) => (
            <li key={id} className={css.faqMenuItem}>
              <button
                className={css.itemBtn}
                onClick={() => openClickHandler(id)}
              >
                <div className={css.itemTitleWrap}>
                  {item.title}
                  {openId.includes(id) ? (
                    <IoIosArrowUp className={css.itemArrowIcon} />
                  ) : (
                    <IoIosArrowDown className={css.itemArrowIcon} />
                  )}
                </div>
              </button>
              <div
                className={`${css.itemTextCollapse} ${
                  openId.includes(id) ? css.open : ''
                }`}
              >
                <div>
                  <p className={css.faqMenuItemText}>{item.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
