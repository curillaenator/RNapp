import { useState } from "react";
import { BasketFlower } from "../types/common";

type Modes = "light" | "dark";

const DEFAULT_TITLE = "NativeFlowers";
const MODES: Record<Modes, Modes> = {
  light: "dark",
  dark: "light",
};

export const useHeaderControls = () => {
  const [title, setTitle] = useState<string>(DEFAULT_TITLE);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [mode, setMode] = useState<Modes>("light");
  const [basket, setBasket] = useState<BasketFlower[] | null>(null);

  const controls = {
    handleMenu: () => setIsMenu((prev) => !prev),
    handleMode: () => setMode((prev) => MODES[prev]),
    handleTitle: (title?: string) => setTitle(title || DEFAULT_TITLE),
  };

  return {
    title,
    isMenu,
    mode,
    basket,
    controls,
  };
};
