import { createStore, createEvent, createEffect } from "effector";
import { Flower } from "../types/common";

interface ShopState {
  items: Flower[];
  filtered: Flower[];
}

const flower: Flower = {
  id: 0,
  title: "Сhamomile",
  imageURL:
    "https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/s456eae6941369b97/image/i267a827c48af9c93/version/1404630287/image.jpg",
  description:
    "Chamomile or camomile is the common name for several daisy-like plants of the family Asteraceae. Two of the species, Matricaria recutita, and Anthemis nobilis are commonly used to make herbal infusions for beverages",
  price: "2$",
  likes: 0,
  quantity: 0,
};

const ITEMS_MOCK: Flower[] = [...new Array(10).fill(null)].map((_, i) => ({
  ...flower,
  id: i,
  title: `Сhamomile_${i}`,
}));

const INITIAL_STATE: ShopState = {
  items: ITEMS_MOCK,
  filtered: [],
};

// Actions

export const search = createEvent<Flower[]>();

export const shopStore = createStore<ShopState>(INITIAL_STATE).on(
  search,
  (state, filtered) => ({ ...state, filtered })
);
