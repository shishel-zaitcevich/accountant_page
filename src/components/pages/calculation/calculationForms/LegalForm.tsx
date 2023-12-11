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

const LegalForm = ({ name, control }: FormInputProps) => {
  const {} = useForm();
  const { t } = useTranslation();

  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        {t('calculation:legalForm')}
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
            <FormControlLabel
              value="ИП"
              control={<Radio />}
              label={t('calculation:entrepreneur')}
            />
            <FormControlLabel
              value="ООО"
              control={<Radio />}
              label={t('calculation:llc')}
            />
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default LegalForm;
