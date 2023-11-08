import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
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
    // Загрузка отзывов из localStorage при монтировании компонента
    const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    // Сохранение отзывов в localStorage при их изменении
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Отправка данных отзыва
    console.log(data);
    setReviews([...reviews, { name: data.name, review: data.review }]);
    setValue('name', '');
    setValue('review', '');
  };

  return (
    <div className="container">
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

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Отправить отзыв
          </Button>
        </form>
      </Container>
      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          Отзывы
        </Typography>
        <List>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <Typography>
                <strong>{review.name}</strong>: {review.review}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default FeedbackForm;
