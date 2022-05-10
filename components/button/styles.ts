import { StyleSheet } from "react-native";

import { ButtonSizes, ButtonProps } from "./interfaces";

import { palette } from "../../styles/colors";

const styles: Record<ButtonSizes, Record<string, object>> = {
  l: StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      backgroundColor: palette.violet[500],
      height: 56,
      paddingHorizontal: 20,
      // borderRadius: 16,
      borderBottomRightRadius: 16,
      borderTopRightRadius: 16,
    },

    title: {
      fontSize: 16,
      fontWeight: "600",
      // color: palette.neutral[200],
    },
  }),

  m: StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      backgroundColor: palette.violet[500],
      height: 40,
      paddingHorizontal: 16,
      // borderRadius: 12,
      borderBottomRightRadius: 12,
      borderTopRightRadius: 12,
    },

    title: {
      fontSize: 14,
      fontWeight: "600",
      // color: palette.neutral[200],
    },
  }),

  s: StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 0,
      backgroundColor: palette.violet[500],
      height: 24,
      paddingHorizontal: 12,
      // borderRadius: 8,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
    },

    title: {
      fontSize: 12,
      fontWeight: "600",
      // color: palette.neutral[200],
    },
  }),
};

export const useButtonStyles = (props: ButtonProps) => {
  const { size = "m" } = props;

  return { s: styles[size] };
};
