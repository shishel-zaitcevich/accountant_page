import { TextField, Typography, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { FormInputProps } from '../calculationTypes';

const EmployeeForm = ({ name, control }: FormInputProps) => {
  const { register } = useForm();

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h5">Количество сотрудников</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            type="number"
            {...field}
            label="Введите количество"
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
