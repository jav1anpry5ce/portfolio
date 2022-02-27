import '../styles/globals.css'
import { Header } from "../components";
import { SimpleProvider } from "../utils/simpleContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <SimpleProvider>
        <Component {...pageProps} />
      </SimpleProvider>
    </div>
  );
}

export default MyApp
