import React, { FC } from "react";
import { View } from "react-native";

import { Item } from "../item";

import { useStore } from "effector-react";

import { shopStore } from "../../store/shop";

import { s } from "./styles";

export const Shop: FC = () => {
  const { items } = useStore(shopStore);

  return (
    <View style={s.shop}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </View>
  );
};
