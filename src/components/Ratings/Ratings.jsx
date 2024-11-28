import { FaStar } from 'react-icons/fa';

import { ratings, getStars } from '../../utils';

import css from './Ratings.module.css';

export default function Rating() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className={css.ratingsMenu}>
          {ratings.map((rating, index) => (
            <li key={index} className={css.ratingsMenuItem}>
              <h3 className={css.menuItemTitle}>{rating.title}</h3>
              <div className={css.itemRatingWrap}>
                <span className={css.itemStarsWrap}>
                  {getStars(rating.score).map((star, index) => (
                    <FaStar
                      key={index}
                      className={
                        star === 'yellow'
                          ? css.ratingIconStarActive
                          : css.ratingIconStar
                      }
                      aria-label="Rating star"
                    />
                  ))}
                </span>
                <span className={css.menuItemScore}>{rating.score}&#47;10</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
