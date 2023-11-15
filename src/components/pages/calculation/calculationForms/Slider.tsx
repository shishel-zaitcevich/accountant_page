import React, { useState } from 'react';
import { Slider, Typography, Box } from '@mui/material';

interface CustomSliderProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange }) => {
  const marks = Array.from({ length: 12 }, (_, index) => ({
    value: index * 10,
    label: (index * 10).toString(),
  }));

  return (
    <Box
      sx={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        id="discrete-slider-restrict"
        gutterBottom
        variant="h5"
        textAlign={'center'}
      >
        Количество операций в месяц
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-restrict"
        step={1}
        marks={marks}
        min={0}
        max={115}
        sx={{
          color: (theme) =>
            value > 0 ? theme.palette.primary.main : theme.palette.grey[400],
        }}
      />
      <Typography textAlign={'center'} margin={'20px'} variant="h6">
        Выбранное количество: {value > 110 ? 'Больше 110' : value}
      </Typography>
    </Box>
  );
};

const CalculationSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <div>
      <CustomSlider value={sliderValue} onChange={handleSliderChange} />
    </div>
  );
};

export default CalculationSlider;
