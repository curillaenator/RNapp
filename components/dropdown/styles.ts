import { StyleSheet } from "react-native";
import { palette } from "../../styles/colors";

export const s = StyleSheet.create({
  dropdown: {
    position: "relative",
  },

  trigger: {
    justifyContent: "center",
    width: 56,
    height: 56,
    padding: 8,
  },

  listFromRight: {
    position: "absolute",
    top: 64,
    right: 0,
    backgroundColor: palette.neutral[100],
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    zIndex: 999,
  },

  listItem: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  listItemIcon: {
    marginRight: 12,
    color: palette.neutral[700],
  },

  listItemText: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.neutral[700],
  },
});
