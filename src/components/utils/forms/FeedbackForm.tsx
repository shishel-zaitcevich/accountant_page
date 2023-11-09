import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  styled,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import '../forms/formsStyles.scss';

interface FormData {
  name: string;
  email: string;
  review: string;
}

const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const [reviews, setReviews] = useState<{ name: string; review: string }[]>(
    []
  );

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (data.review.trim()) {
      setReviews([...reviews, { name: data.name, review: data.review }]);
      setValue('name', '');
      setValue('email', '');
      setValue('review', '');
    }
  };

  const CustomButton = styled(Button)({
    backgroundColor: '#1F2F5C',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#ef2a82',
    },
  });

  return (
    <>
      <div className="form_container">
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Оставить отзыв
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Имя"
              {...register('name', { required: 'Это поле обязательно' })}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Email"
              {...register('email', {
                required: 'Это поле обязательно',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Некорректный email',
                },
              })}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Отзыв"
              {...register('review', { required: 'Это поле обязательно' })}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={!!errors.review}
              helperText={errors.review?.message}
            />
            <div className="review_form_buttons">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      color: '#1F2F5C',
                    }}
                  />
                }
                label="Нажимая кнопку Отправить, Вы даете согласие на обработку Ваших персональных данных."
              />
              <CustomButton type="submit" variant="contained">
                Отправить отзыв
              </CustomButton>
            </div>
          </form>
        </Container>

        <div className="form_container">
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" gutterBottom>
              Отзывы
            </Typography>
            <List>
              {reviews.map((review, index) => (
                <ListItem key={index} className="review">
                  <Typography>
                    <strong>{review.name}</strong>
                    : <br />
                    {review.review}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
