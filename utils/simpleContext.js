import { createContext, useRef } from "react";

const SimpleContext = createContext();

const SimpleProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (type) => {
    if (type === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (type === "work") {
      workRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const value = {
    aboutRef,
    workRef,
    contactRef,
    scrollTo,
  };

  return (
    <SimpleContext.Provider value={value}>{children}</SimpleContext.Provider>
  );
};

export { SimpleProvider, SimpleContext };
