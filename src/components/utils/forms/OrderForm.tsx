import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography } from '@mui/material';

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
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Допустим, вы хотите закрыть форму после отправки
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '50%',
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
            Форма заказа
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Имя"
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="organization"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Название организации"
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Контактный телефон"
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Электронная почта"
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', width: '100%' }}>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrderForm;
