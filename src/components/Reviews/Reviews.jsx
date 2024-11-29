import { useState } from 'react';

import { IoStar } from 'react-icons/io5';
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from 'react-icons/hi2';

import { reviewsItems, ITEMS_PER_PAGE } from '../../utils';

import css from './Reviews.module.css';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + ITEMS_PER_PAGE) % reviewsItems.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? reviewsItems.length - ITEMS_PER_PAGE
        : prevIndex - ITEMS_PER_PAGE
    );
  };

  const currentItems = reviewsItems.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  const displayedItems =
    currentItems.length < ITEMS_PER_PAGE
      ? [
          ...currentItems,
          ...reviewsItems.slice(0, ITEMS_PER_PAGE - currentItems.length),
        ]
      : currentItems;

  return (
    <section id="reviews" className={css.section}>
      <div className={css.container}>
        <div className={css.reviewsTitleWrap}>
          <h2 className={css.reviewsTitle}>what other players have to say</h2>
          <ul className={css.reviewsBtnMenu}>
            <li className={css.reviewsBtnMenuItem}>
              <button
                className={css.reviewsBtn}
                type="button"
                onClick={handlePrev}
              >
                <HiOutlineArrowLongLeft
                  className={css.reviewsBtnIcon}
                  aria-label="Arrow left"
                />
              </button>
            </li>
            <li className={css.reviewsBtnMenuItem}>
              <button
                className={css.reviewsBtn}
                type="button"
                onClick={handleNext}
              >
                <HiOutlineArrowLongRight
                  className={css.reviewsBtnIcon}
                  aria-label="Arrow right"
                />
              </button>
            </li>
          </ul>
        </div>
        <ul className={css.reviewsMenu}>
          {displayedItems.map((item, index) => (
            <li key={index} className={css.reviewsMenuItem}>
              <img
                className={css.menuItemAvatar}
                srcSet={item.srcSet}
                src={item.src}
                alt={item.title}
              />
              <div>
                <div className={css.itemContentWrap}>
                  <h3 className={css.itemTitle}>{item.title}</h3>
                  <span className={css.itemRating}>
                    <IoStar
                      className={css.itemIconRating}
                      aria-label="Rating star"
                    />
                  </span>
                  <span className={css.itemScore}>{item.rating}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
