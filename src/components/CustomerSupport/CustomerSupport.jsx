import { useState } from 'react';
import { BiChat } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { supportItems } from '../../supportUtils';

import css from './CustomerSupport.module.css';

export default function CustomerSupport() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapClick = () => {
    setIsMapOpen((prevState) => !prevState);
  };

  const handleCloseMap = () => {
    setIsMapOpen(false);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <img
          src="/images/waves-decoration/wave-smooth.svg"
          alt="Decorative Wave"
          className={css.supportWaveDecoration}
        />
        <h2 className={css.supportTitle}>customer support</h2>
        <p className={css.supportText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          egestas eget purus, in dapibus imperdiet quis eget. Curabitur semper
          volutpat cras elementum. Eget ultrices donec urna tellus duis
          ullamcorper consequat. Enim nunc neque tristique adipiscing varius sit
          tristique. Sit parturient eget pharetra, suspendisse. Turpis ut odio
          lorem sapien congue. Pulvinar id in mollis faucibus ut. Magna in neque
          tristi
        </p>

        <div className={css.supportContentWrap}>
          <ul className={css.supportMenu}>
            <li className={css.supportMenuItem}>
              <button className={css.supportMenuItemBtn} type="button">
                <span>
                  <BiChat className={css.menuItemIcon} />
                </span>
                chat
              </button>
            </li>

            <li className={css.supportMenuItem}>
              <a className={css.supportMenuItemLink} href="tel:+1234567890">
                <span>
                  <BsTelephone className={css.menuItemIcon} />
                </span>
                phone
              </a>
            </li>

            <li className={css.supportMenuItem}>
              <a
                className={css.supportMenuItemLink}
                href="mailto:example@mail.com"
              >
                <span>
                  <MdOutlineMail className={css.menuItemIcon} />
                </span>
                email
              </a>
            </li>
          </ul>
          <ul className={css.customerSupportMenu}>
            {supportItems.map((item, index) => (
              <li
                key={index}
                className={css.customerSupportMenuItem}
                aria-label={item.ariaLabel}
              >
                <span className={css.menuItemIcon}>{item.icon}</span>
                <h3 className={css.menuItemTitle}>{item.title}</h3>
                {index < 2 ? (
                  <a
                    href={`mailto:${item.contact}`}
                    className={css.menuItemContact}
                  >
                    {item.contact}
                  </a>
                ) : index === supportItems.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleMapClick}
                    className={css.menuItemContact}
                  >
                    {item.contact}
                  </button>
                ) : (
                  <p className={css.menuItemContact}>{item.contact}</p>
                )}
              </li>
            ))}
          </ul>

          {isMapOpen && (
            <div className={css.iframeContainer}>
              <iframe
                className={css.supportLocation}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631559026!3d-37.81720974201426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0fd1e1b%3A0x5045675218ceed13!2sBroadway%2C%2012%2C%20Lyric%20building%2C%20block%201%2C%201st%20floor%2C%20Flat%2FOffice%2015%2C%2029000%2C%20Oslo%2C%20Norway!5e0!3m2!1sen!2sus!4v1693000000000!5m2!1sen!2sus"
                width="925"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <button
                onClick={handleCloseMap}
                className={css.supportMapCloseBtn}
                aria-label="Close Map"
              >
                <AiOutlineClose className={css.mapCloseIcon} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
