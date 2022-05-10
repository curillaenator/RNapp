import { useState, useCallback } from "react";

export const useDebounce = (timer: number = 1000) => {
  const [t, setT] = useState<NodeJS.Timeout | null>(null);

  const debounce = useCallback(
    (callback: () => void) => {
      if (t) clearTimeout(t);

      const newT = setTimeout(() => {
        callback();
        setT(null);
      }, timer);

      setT(newT);
    },
    [t, timer]
  );

  return { debounce };
};
