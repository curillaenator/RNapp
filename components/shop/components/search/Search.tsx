import React, { FC } from "react";
import { View, TextInput } from "react-native";

import { SearchProps } from "./interfaces";
import { s } from "./styles";

export const Search: FC<SearchProps> = (props) => {
  const { value, handleValue } = props;

  return (
    <View style={s.search}>
      <TextInput
        value={value}
        onChangeText={handleValue}
        placeholder="Type here anything"
        style={s.input}
      />
    </View>
  );
};
