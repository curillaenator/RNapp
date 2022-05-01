import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useHeaderControls } from "./hooks/useHeaderControls";

import { Header } from "./components/header";

import { palette } from "./styles/colors";
import { styles } from "./styles/styles";

export default function App() {
  const headerControls = useHeaderControls();
  const { mode } = headerControls;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[palette.life[900], palette.neutral[800]]}
        style={styles.background}
      >
        <Header {...headerControls} />

        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}
