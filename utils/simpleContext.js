import { createContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const SimpleContext = createContext();

const SimpleProvider = ({ children }) => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split("/")[1];
    if (hash === "#main") scrollTo(mainRef);
    if (hash === "#about") scrollTo(aboutRef);
    if (hash === "#work") scrollTo(workRef);
    if (hash === "#contact") scrollTo(contactRef);
  }, [router]);

  const scrollTo = (ref) => {
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offset = 100;
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
