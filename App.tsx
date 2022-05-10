import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useHeaderControls } from "./hooks/useHeaderControls";

import { Header } from "./components/header";
import { Shop } from "./components/shop";
// import { ShopStack } from "./components/Stack";

import { palette } from "./styles/colors";
import { styles } from "./styles/styles";

export default function App() {
  const headerControls = useHeaderControls();
  const { mode } = headerControls;

  return (
    // <NavigationContainer>
    <LinearGradient
      colors={[palette.violet[800], palette.neutral[800]]}
      style={styles.container}
    >
      <Header {...headerControls} />

      {/* <ScrollView> */}
      <Shop />
      {/* </ScrollView> */}

      <StatusBar style="auto" />
    </LinearGradient>
    // </NavigationContainer>
  );
}
