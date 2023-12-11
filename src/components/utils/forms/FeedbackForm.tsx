import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
  TextField,
  Container,
  Typography,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import '../forms/formsStyles.scss';
import { CustomButton } from '../CustomButton';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  review: string;
  agree: boolean;
}

export const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormData>();

  const { t } = useTranslation();

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
    if (data.agree) {
      if (data.name.trim() && data.email.trim() && data.review.trim()) {
        setReviews([...reviews, { name: data.name, review: data.review }]);
        setValue('name', '');
        setValue('email', '');
        setValue('review', '');
      } else {
        console.log('Ошибка: Заполните все поля перед отправкой');
      }
    } else {
      console.log('Ошибка: Подтвердите согласие');
    }
  };

  return (
    <>
      <div className="form_container">
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            {t('feedback:leaveReview')}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={t('feedback:name')}
              {...register('name', { required: t('common:requires') })}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Email"
              {...register('email', {
                required: t('common:requires'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('common:invalidEmail'),
                },
              })}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label={t('feedback:feedback')}
              {...register('review', { required: t('common:requires') })}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={!!errors.review}
              helperText={errors.review?.message}
            />
            <div className="review_form_buttons">
              <Controller
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        sx={{
                          '& .MuiSvgIcon-root': { fontSize: 28 },
                          color: '#1F2F5C',
                        }}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label={t('feedback:confirm')}
                  />
                )}
                name="agree"
                control={control}
                rules={{ required: t('feedback:consentIsRequired') }}
              />
              {errors.agree && (
                <span style={{ color: 'red' }}>{errors.agree.message}</span>
              )}

              <CustomButton type="submit" variant="contained">
                {t('feedback:submitBtn')}
              </CustomButton>
            </div>
          </form>
        </Container>

        <div className="form_container">
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" gutterBottom>
              {t('feedback:reviews')}
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
