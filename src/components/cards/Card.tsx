import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/main_Page/footer/Footer.css';

interface CardProps {
  title: string;
  quantity: string;
  price: number;
  timeline: string;
  index: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  quantity,
  price,
  timeline,
  index,
}): JSX.Element => {
  const navigate = useNavigate();
  function HandleClick() {
    navigate('/rates');
  }
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
          <a href="">
            <button
              className={`button_bottom ${isEven ? 'light_button' : ''}`}
              onClick={HandleClick}
            >
              Подробнее
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
