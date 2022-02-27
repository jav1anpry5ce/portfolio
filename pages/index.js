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

export default function Home() {
  return (
    <div className="relative mx-auto h-screen w-full max-w-full flex-1 overflow-x-hidden">
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
