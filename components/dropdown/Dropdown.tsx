import React, { FC, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { DropdownProps } from "./interfaces";

import { s } from "./styles";
import { palette } from "../../styles/colors";

export const Dropdown: FC<DropdownProps> = (props) => {
  const { isOpen, list = [], handleTrigger } = props;

  const handleItemPress = useCallback(
    (pressFn?: () => void) => {
      if (!!pressFn) pressFn();
      if (!!handleTrigger) handleTrigger();
    },
    [handleTrigger]
  );

  return (
    <View style={s.dropdown}>
      <TouchableOpacity style={s.trigger} onPress={handleTrigger}>
        {
          //@ts-expect-error
          <Ionicons
            name="menu"
            size={40}
            color={isOpen ? palette.violet[300] : palette.neutral[100]}
          />
        }
      </TouchableOpacity>

      {isOpen && (
        <View style={s.listFromRight}>
          {!!list.length &&
            list.map((item) => (
              <TouchableOpacity
                key={item.id || item.title}
                style={s.listItem}
                onPress={() => handleItemPress(item.onPress)}
              >
                {item.icon && (
                  //@ts-expect-error
                  <Ionicons
                    //@ts-expect-error
                    name={item.icon}
                    size={20}
                    style={s.listItemIcon}
                  />
                )}

                <Text style={s.listItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};
