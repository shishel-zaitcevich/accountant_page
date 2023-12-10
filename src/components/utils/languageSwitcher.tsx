import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select value={i18n.language || ''} onChange={handleChange}>
      <MenuItem value="en">en</MenuItem>
      <MenuItem value="ru">ru</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
