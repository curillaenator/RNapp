import React, { FC } from "react";
import { Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { Dropdown } from "../dropdown";

import { HeaderProps } from "./interfaces";

import { MENU_LIST } from "./constants";

import { palette } from "../../styles/colors";
import { s } from "./styles";

export const Header: FC<HeaderProps> = (props) => {
  const { isMenu, title = "Native Chats", controls } = props;
  const { handleMenu } = controls;

  return (
    <View style={s.wrapper}>
      <View style={s.logo}>
        {
          //@ts-expect-error
          <Entypo
            name="flower"
            size={56}
            color={palette.life[300]}
            style={s.logoIcon}
          />
        }

        <Text style={s.logoText}>{title}</Text>
      </View>

      <Dropdown
        list={MENU_LIST}
        isOpen={isMenu || false}
        handleTrigger={handleMenu}
      />
    </View>
  );
};
