import React, { createContext, useState, useEffect } from "react";

export const ScreenContext = createContext();

function ScreenContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    function changeScreen() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth >= 700) {
        setIsDropDown(false);
      }
    }

    window.addEventListener("resize", changeScreen);

    return () => {
      window.removeEventListener("resize", changeScreen);
    };
  }, []);

  return (
    <ScreenContext.Provider
      value={{ screenSize, setScreenSize, isDropDown, setIsDropDown }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenContextProvider;
