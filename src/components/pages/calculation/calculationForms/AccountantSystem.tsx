import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

const AccountantSystem: React.FC = () => {
  const {
    formState: {},
    control,
  } = useForm<FormData>();

  return (
    <>
      <Controller
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
        name="values"
        control={control}
      />
    </>
  );
};

export default AccountantSystem;
