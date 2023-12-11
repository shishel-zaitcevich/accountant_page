import { TextField, Typography, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { FormInputProps } from '../calculationTypes';
import { useTranslation } from 'react-i18next';

const EmployeeForm = ({ name, control }: FormInputProps) => {
  const { register } = useForm();
  const { t } = useTranslation();

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h5"> {t('calculation:numOfEmployees')}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            type="number"
            {...field}
            label={t('calculation:enterNum')}
            variant="outlined"
            margin="normal"
            value={field.value !== undefined ? field.value : ''}
          />
        )}
      />
    </Box>
  );
};

export default EmployeeForm;
