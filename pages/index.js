import {
  Main,
  FindMe,
  MailMe,
  AboutMe,
  Work,
  Contact,
  Header,
  Other,
} from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto w-full flex-1">
      <Head>
        <title>Javaughn Pryce - Portfolio</title>
      </Head>
      <Header />
      <div className="overflow-x-hidden">
        <MailMe />
        <FindMe />
        <Main />
        <AboutMe />
        <Work />
        <Other />
        <Contact />
      </div>
    </div>
  );
}
