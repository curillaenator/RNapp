import { useState, useCallback, useEffect } from "react";
import { useStore } from "effector-react";

import { useDebounce } from "../../../hooks/useDebounce";

import { shopStore, search } from "../../../store/shop";

export const useSearch = () => {
  const { items, filtered } = useStore(shopStore);

  const { debounce } = useDebounce(700);

  const [value, setValue] = useState<string>("");
  const handleValue = useCallback((string: string) => setValue(string), []);

  const handleFound = useCallback(
    (target: string) => {
      const found = items.filter((item) =>
        (item.title + item.description).includes(target)
      );

      search(found);
    },
    [value]
  );

  useEffect(() => {
    debounce(() => handleFound(value));
  }, [value]);

  return {
    filtered,
    value,
    handleValue,
  };
};
