import { Slider, Typography, Box } from '@mui/material';
import { useController } from 'react-hook-form';
import { FormInputProps } from '../calculationTypes';
import { useTranslation } from 'react-i18next';

export const CustomSlider = ({ name, control }: FormInputProps) => {
  const { t } = useTranslation();
  const { field } = useController({
    name,
    control,
    defaultValue: 0,
  });

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
        {t('calculation:operationsNumb')}
      </Typography>
      <>
        <Slider
          {...field}
          value={field.value}
          onChange={(e, value) => field.onChange(value)}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider-restrict"
          step={1}
          marks={marks}
          min={0}
          max={115}
          sx={{
            color: (theme) =>
              field.value > 0
                ? theme.palette.primary.main
                : theme.palette.grey[400],
          }}
        />
        <Typography textAlign={'center'} margin={'20px'} variant="h6">
          {t('calculation:selectedQuantity')}
          {field.value > 110 ? 'Больше 110' : field.value}
        </Typography>
      </>
    </Box>
  );
};
