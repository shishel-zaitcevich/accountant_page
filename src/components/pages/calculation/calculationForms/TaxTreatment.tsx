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
import { useTranslation } from 'react-i18next';

const TaxTreatment = ({ name, control }: FormInputProps) => {
  const {} = useForm();
  const { t } = useTranslation();
  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        {t('calculation:taxationMode')}
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
              label={t('calculation:simplifiedTax6')}
            />
            <FormControlLabel
              value="УСН 15% (доход - расход), ЕСХН и другие"
              control={<Radio />}
              label={t('calculation:simplifiedTax15')}
            />
            <FormControlLabel
              value="ОСН"
              control={<Radio />}
              label={t('calculation:generalTaxSys')}
            />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default TaxTreatment;
