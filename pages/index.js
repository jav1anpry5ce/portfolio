import {
  Main,
  FindMe,
  MailMe,
  AboutMe,
  Work,
  Contact,
  Header,
} from "../components";
import Head from "next/head";
import { SimpleContext } from "../utils/simpleContext";
import { useContext } from "react";

export default function Home() {
  const { open } = useContext(SimpleContext);
  return (
    <div
      className={`relative mx-auto h-screen w-full max-w-full flex-1 overflow-x-hidden ${
        open && "overflow-hidden"
      }`}
    >
      <Head>
        <title>Portfolio - Javaughn Pryce</title>
      </Head>
      <Header />
      <MailMe />
      <FindMe />
      <Main />
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}
