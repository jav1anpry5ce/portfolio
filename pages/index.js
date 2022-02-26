import { Main, FindMe, MailMe, AboutMe, Work, Contact } from "../components";

export default function Home() {
  return (
    <div className="relative mx-auto my-2 w-full max-w-7xl flex-1 overflow-x-hidden">
      <MailMe />
      <FindMe />
      <Main />
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}
