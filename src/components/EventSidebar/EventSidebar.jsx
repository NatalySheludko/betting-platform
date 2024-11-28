import { FaPlay, FaPlayCircle } from 'react-icons/fa';

import CustomButton from '../CustomButton/CustomButton';
import { eventsSidebarItems } from '../../utils';

import css from './EventSidebar.module.css';

export default function EventSidebar() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.sidebarEventsWrap}>
          <CustomButton
            variant="default"
            size="larger"
            className={css.eventButton}
          >
            <span>
              <FaPlayCircle
                className={css.iconCirclePlay}
                aria-label="Play icon"
                aria-hidden="true"
              />
            </span>
            Live events (143)
            <span>
              <FaPlay
                className={css.iconPlay}
                aria-label="Play icon"
                aria-hidden="true"
              />
            </span>
          </CustomButton>
        </div>

        <ul className={css.sidebarMenu}>
          {eventsSidebarItems.map(({ id, srcSet, src, alt, text }) => (
            <li key={id} className={css.sidebarMenuItem}>
              <div className={css.sidebarMenuItemWrap}>
                <img
                  srcSet={srcSet}
                  src={src}
                  className={css.sidebarMenuItemImg}
                  alt={alt}
                />
                <span className={css.sidebarMenuItemText}>{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
