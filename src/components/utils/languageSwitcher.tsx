import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  const isScreenLessThan1300 = window.innerWidth < 1300;
  const isScreenLessThan768 = window.innerWidth < 768;
  const selectStyles = {
    border: '1px solid white',
    color: 'white',
    '& .MuiSelect-icon': {
      color: 'white',
    },
    marginLeft: '20px',
    marginRight: isScreenLessThan1300 ? '100px' : '20px',
    marginTop: isScreenLessThan1300 ? '0px' : '0px',
    width: isScreenLessThan768 ? '40px' : '70px',
  };

  return (
    <Select
      value={i18n.language || ''}
      onChange={handleChange}
      sx={selectStyles}
    >
      <MenuItem value="en">en</MenuItem>
      <MenuItem value="ru">ru</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
