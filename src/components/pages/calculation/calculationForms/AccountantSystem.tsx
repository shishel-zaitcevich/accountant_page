import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FormInputProps } from '../calculationTypes';

const AccountantSystem = ({ name, control }: FormInputProps) => {
  const {
    formState: {},
  } = useForm<FormData>();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  color: '#1F2F5C',
                }}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Используете ли вы свою программу ведения бухгалтерского учета?"
          />
        )}
      />
    </>
  );
};

export default AccountantSystem;
