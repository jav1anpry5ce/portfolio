import { createContext, useRef } from "react";

const SimpleContext = createContext();

const SimpleProvider = ({ children }) => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (type) => {
    if (type === "main") {
      mainRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
    } else if (type === "contact") {
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
    mainRef,
    scrollTo,
  };

  return (
    <SimpleContext.Provider value={value}>{children}</SimpleContext.Provider>
  );
};

export { SimpleProvider, SimpleContext };
