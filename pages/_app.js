import "../styles/globals.css";
import { SimpleProvider } from "../utils/simpleContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="lazyOnload"
        id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <SimpleProvider>
        <Component {...pageProps} />
      </SimpleProvider>
    </div>
  );
}

export default MyApp;
