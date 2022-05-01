import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import { Shop } from "../shop";

const Stack = createStackNavigator();

export const ShopStack: FC = () => {
  return (
    <Shop />
    // <View>
    //   {
    //     //@ts-expect-error
    //     <Stack.Navigator>
    //       <Stack.Screen name="Shop" component={Shop} />
    //       {/* <Stack.Screen name="Shop2" component={Shop} /> */}
    //     </Stack.Navigator>
    //   }
    // </View>
  );
};
