import { StyleSheet } from "react-native";
import { palette } from "../../styles/colors";

export const s = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "64px",
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    // transform: [{ translateY: 6 }],
  },

  logoText: {
    color: palette.neutral[100],
    fontSize: 16,
    fontWeight: "800",
  },
});
