import '../styles/globals.css'
import { Header } from "../components";
import { SimpleProvider } from "../utils/simpleContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background pt-3">
      <SimpleProvider>
        <Header />
        <Component {...pageProps} />
      </SimpleProvider>
    </div>
  );
}

export default MyApp
