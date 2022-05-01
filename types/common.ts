import { ReactText } from "react";

export interface Flower {
  id: ReactText;
  title: string;
  description: string;
  imageURL: string;
  likes: number;
  price: number;
}

export interface BasketFlower extends Flower {
  quantity: number;
}
