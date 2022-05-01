import { StyleSheet } from "react-native";
import { palette } from "../../styles/colors";

export const s = StyleSheet.create({
  item: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: palette.neutral[200],
    borderRadius: 16,
    padding: 8,
  },

  main: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 16,
    flexShrink: 0,
  },

  meta: {
    marginRight: 16,
    width: "60%",
  },

  title: {
    color: palette.neutral[700],
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  description: {
    color: palette.neutral[500],
    fontSize: 12,
  },

  business: {
    flexShrink: 0,
  },

  price: {},
});
