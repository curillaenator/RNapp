import React, { FC } from "react";
import { View, DrawerLayoutAndroid } from "react-native";

import { Item } from "../item";
import { Search } from "./components/search/Search";

import { useSearch } from "./hooks/useSearch";

import { s } from "./styles";

export const Shop: FC = () => {
  const { filtered, value, handleValue } = useSearch();

  return (
    <View style={s.shop}>
      <Search value={value} handleValue={handleValue} />

      <View>
        {filtered.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
};
