import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Flower } from "../../types/common";
import { s } from "./styles";

export const Item: FC<Flower> = (props) => {
  const { id, title, description, imageURL, likes, price } = props;

  return (
    <TouchableOpacity style={s.item}>
      <View style={s.main}>
        <Image source={{ uri: imageURL }} style={s.image} />

        <View style={s.meta}>
          <Text style={s.title}>{title}</Text>

          <Text style={s.description}>{description}</Text>
        </View>

        <View style={s.business}>
          <Text style={s.price}>{price}</Text>
        </View>
      </View>

      <Text>{likes}</Text>
    </TouchableOpacity>
  );
};
