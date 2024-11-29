import css from './LangDropdown.module.css';

export const customStyles = {
  control: (base) => ({
    ...base,
    height: '46px',
    width: '130px',
    borderRadius: '16px',
    border: 'none',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '1.3',
    textTransform: 'uppercase',
    color: '#ffffff',
    backgroundColor: '#1a3769',
    cursor: 'pointer',
    boxShadow: '0 0 0 2px #1a3769',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#ffffff',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#ffffff',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#1a3769',
  }),
  option: (base) => ({
    ...base,
    backgroundColor: '#1a3769',
    color: '#ffffff',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#153052',
    },
  }),
};

export const customLabel = (option) => (
  <div className={css.option}>
    <img
      src={option.flagUrl}
      srcSet={`${option.flagUrl} 1x, ${option.flagX} 2x`}
      alt={option.label}
      className={css.flagImage}
    />
    {option.label}
  </div>
);
