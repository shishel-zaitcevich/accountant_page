import React from 'react';
import { useTranslation } from 'react-i18next';
import '../pages/main_Page/footer/Footer.css';

interface CardProps {
  title: string;
  quantity: string;
  price: number;
  timeline: string;
  index: number;
  id: string;
  onClickHander: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  quantity,
  price,
  timeline,
  index,

  onClickHander,
}): JSX.Element => {
  const { t } = useTranslation();

  const isEven = index % 2 === 0;

  return (
    <>
      <div className={`tarifs ${isEven ? 'even_tarif' : 'odd_tarif'}`}>
        <div className={`tarif ${isEven ? 'dark_tarif' : 'light_tarif'}`}>
          <h3 className={`price_titles ${isEven ? 'light_price-title' : ''}`}>
            {title}
          </h3>
          <p
            className={`section_text text ${
              isEven ? 'light_section_text' : ''
            }`}
          >
            {quantity}
          </p>
          <span
            className={`price_size price_titles ${
              isEven ? 'light_price-size' : ''
            }`}
          >
            {price}
          </span>
          <p
            className={`section_text text ${
              isEven ? 'light_section_text' : ''
            }`}
          >
            {timeline}
          </p>

          <button
            className={`button_bottom ${isEven ? 'light_button' : ''}`}
            onClick={onClickHander}
          >
            {t('home:moreBtn')}
          </button>
        </div>
      </div>
    </>
  );
};
