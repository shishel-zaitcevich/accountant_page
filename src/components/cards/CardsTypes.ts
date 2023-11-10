export interface CardsTypes {
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
