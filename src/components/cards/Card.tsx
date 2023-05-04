import React from 'react';
import '../pages/main_Page/footer/Footer.css';

interface CardProps {
  title: string;
  quantity: string;
  price: number;
  timeline: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  quantity,
  price,
  timeline,
}): JSX.Element => {
  return (
    <>
      <div className="tarifs">
        <div className="tarif dark_tarif">
          <h3 className="price_titles">{title}</h3>
          <p className="section_text text ">{quantity}</p>
          <span className="price_size price_titles">{price}</span>
          <p className="section_text text">{timeline}</p>
          <a href="">
            <button className="button_bottom">Заказать</button>
          </a>
        </div>
      </div>
    </>
  );
};
