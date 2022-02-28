import { createContext, useRef, useState } from "react";

const SimpleContext = createContext();

const SimpleProvider = ({ children }) => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offset = 85;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const value = {
    aboutRef,
    workRef,
    contactRef,
    mainRef,
    scrollTo,
  };

  return (
    <SimpleContext.Provider value={value}>{children}</SimpleContext.Provider>
  );
};

export { SimpleProvider, SimpleContext };
