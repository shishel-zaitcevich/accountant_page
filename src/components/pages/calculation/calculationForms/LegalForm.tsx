import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import React from 'react';
import { FormInputProps } from '../calculationTypes';
import { Controller, useForm } from 'react-hook-form';

const LegalForm = ({ name, control }: FormInputProps) => {
  const {} = useForm();

  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        Организационно-правовая форма
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="name"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
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
