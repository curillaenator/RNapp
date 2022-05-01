import { Flower } from "../../types/common";

export interface HeaderProps {
  title?: string;
  isMenu?: boolean;
  mode?: "light" | "dark";
  basket?: Flower[] | null;
  controls: {
    handleMenu: () => void;
    handleMode: () => void;
    handleTitle: (title?: string) => void;
  };
}
