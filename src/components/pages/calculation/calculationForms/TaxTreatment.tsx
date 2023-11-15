import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import React from 'react';

const TaxTreatment: React.FC = () => {
  const [value, setValue] = React.useState<string>('ОСН');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <Typography variant="h5" textAlign={'center'}>
        Режим налогообложения
      </Typography>

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
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
      {/* <Typography variant="body1">
        Выбранная система налогообложения: {value}
      </Typography> */}
    </FormControl>
  );
};

export default TaxTreatment;
