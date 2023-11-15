import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import React from 'react';
import { FormInputProps } from '../calculationTypes';
import { Controller } from 'react-hook-form';

const LegalForm = ({ name, control }: FormInputProps) => {
  const [value, setValue] = React.useState<string>('ООО');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        Организационно-правовая форма
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue="ООО" // Установите значение по умолчанию, если нужно
        render={({ field }) => (
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="name"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="ИП" control={<Radio />} label="ИП" />
            <FormControlLabel value="ООО" control={<Radio />} label="ООО" />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default LegalForm;
