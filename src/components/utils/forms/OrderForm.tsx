import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Typography } from '@mui/material';
import { CustomButton } from '../CustomButton';
import { useTranslation } from 'react-i18next';

interface OrderFormProps {
  handleClose: () => void;
}

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const { t } = useTranslation();

  const onSubmit = (data: FormData) => {
    console.log(data);

    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '70%',
        marginTop: '20px',
        backgroundColor: 'white',
        padding: '20px',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            {t('rates:orderForm')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({}) => (
              <TextField
                label={t('rates:name')}
                {...register('name', { required: t('common:requires') })}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="organization"
            control={control}
            defaultValue=""
            render={({}) => (
              <TextField
                label={t('rates:nameOfOrganization')}
                {...register('organization', {
                  required: t('common:requires'),
                })}
                fullWidth
                margin="normal"
                error={!!errors.organization}
                helperText={errors.organization?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({}) => (
              <TextField
                label={t('rates:phone')}
                {...register('phone', {
                  required: t('common:requires'),
                })}
                fullWidth
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({}) => (
              <TextField
                label={t('rates:email')}
                {...register('email', {
                  required: t('common:requires'),
                })}
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', width: '100%' }}>
          <CustomButton type="submit" variant="contained" color="primary">
            {t('rates:submit')}
          </CustomButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrderForm;
