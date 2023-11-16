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

const TaxTreatment = ({ name, control }: FormInputProps) => {
  const {} = useForm();
  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        Режим налогообложения
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <FormControlLabel
              value="УСН 6% (доход) или патент"
              control={<Radio />}
              label="УСН 6% (доход) или патент"
            />
            <FormControlLabel
              value="УСН 15% (доход - расход), ЕСХН и другие"
              control={<Radio />}
              label="УСН 15% (доход - расход), ЕСХН и другие"
            />
            <FormControlLabel value="ОСН" control={<Radio />} label="ОСН" />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default TaxTreatment;
