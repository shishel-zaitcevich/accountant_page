import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const EmployeeForm: React.FC = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setEmployeeCount(newValue);
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h5">Количество сотрудников</Typography>
      <TextField
        type="number"
        value={employeeCount}
        onChange={handleInputChange}
        label="Введите количество"
        variant="outlined"
        margin="normal"
      />
      {/* <Typography variant="body1">
        Текущее количество сотрудников: {employeeCount}
      </Typography> */}
    </Box>
  );
};

export default EmployeeForm;
