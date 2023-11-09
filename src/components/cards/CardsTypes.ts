export interface CardsTypes {
  title: string;
  quantity: string;
  price: number;
  timeline: string;
  description?: string;
}

export interface StateInterface {
  cardData: CardsTypes[];
}
