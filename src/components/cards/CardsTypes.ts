import { To } from 'react-router-dom';

export interface CardsTypes {
  path: To;
  id: string;
  title: string;
  quantity: string;
  price: number;
  timeline: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface StateInterface {
  cardData: CardsTypes[];
}
