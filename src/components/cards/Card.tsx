import React from 'react';
import { useTranslation } from 'react-i18next';
import '../pages/main_Page/footer/Footer.css';

interface CardProps {
  title: string;
  quantity: string;
  price: number;
  index: number;
  id: string;
  onClickHander: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  quantity,
  price,
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
            {t(`rates:rateTitleVal.${title}`)}
          </h3>
          <p
            className={`section_text text ${
              isEven ? 'light_section_text' : ''
            }`}
          >
            {t('rates:headCount')}
            {quantity}
            {t('rates:people')}
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
            {t('rates:timeline')}
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
