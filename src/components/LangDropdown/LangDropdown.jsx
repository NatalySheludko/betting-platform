import Select from 'react-select';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { customStyles, customLabel } from './LangDropdown.styled';

import css from './LangDropdown.module.css';

export default function LangDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      value: 'at',
      label: 'AT',
      flagUrl: '/images/flag-1x.png',
      flagX: '/images/flag-2x.png',
    },
    {
      value: 'at',
      label: 'AT',
      flagUrl: '/images/flag-1x.png',
      flagX: '/images/flag-2x.png',
    },
  ];

  return (
    <div className={css.languageSelector}>
      <div className={css.selectWrapper}>
        <Select
          options={options}
          styles={customStyles}
          defaultValue={options[1]}
          classNamePrefix="react-select"
          onMenuOpen={() => setIsOpen(true)}
          onMenuClose={() => setIsOpen(false)}
          getOptionLabel={customLabel}
          isSearchable={false}
        />
        <div className={css.arrowWrapper}>
          {isOpen ? (
            <IoIosArrowUp className={css.arrow} />
          ) : (
            <IoIosArrowDown className={css.arrow} />
          )}
        </div>
      </div>
    </div>
  );
}
