import { useEffect, useState } from "react";

export const useMediaQuery = (query: number) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", e => {
      setWidth(window.innerWidth)
    });
  }, [width]);

  return width <= query ? true : false;
};
