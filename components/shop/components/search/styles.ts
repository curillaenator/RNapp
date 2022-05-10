import { StyleSheet } from "react-native";
import { palette } from "../../../../styles/colors";

export const s = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 32,
  },

  input: {
    backgroundColor: palette.neutral[100],
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 16,
    // borderBottomLeftRadius: 16,
    // borderTopLeftRadius: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: palette.violet[300],
  },

  button: {},
});
