import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

import { useButtonStyles } from "./styles";

import { ButtonProps } from "./interfaces";

export const Button: FC<ButtonProps> = (props) => {
  const { s } = useButtonStyles(props);
  const { title = "", onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  );
};
