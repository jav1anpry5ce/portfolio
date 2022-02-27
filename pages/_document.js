import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/static/logo.png" />
      </Head>
      <body className="overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
