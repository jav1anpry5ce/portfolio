import "../styles/globals.css";
import { SimpleProvider } from "../utils/simpleContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-3">
      <SimpleProvider>
        <Component {...pageProps} />
      </SimpleProvider>
    </div>
  );
}

export default MyApp;
