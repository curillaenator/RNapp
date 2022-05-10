export type ButtonSizes = "l" | "m" | "s";

export interface ButtonProps {
  title?: string;
  size?: ButtonSizes;
  onPress: () => void;
}
