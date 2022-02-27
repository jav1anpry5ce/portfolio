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
    <div className="mx-auto my-2 w-full max-w-7xl flex-1">
      <Head>
        <title>Portfolio - Javaughn Pryce</title>
      </Head>
      <Header />
      <div className="overflow-x-hidden">
        <MailMe />
        <FindMe />
        <Main />
        <AboutMe />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
