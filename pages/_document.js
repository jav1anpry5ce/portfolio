import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/logo.png" />
        <meta
          name="description"
          content="Portfolio of Javaughn Pryce, a software engineer based in Philadelphia, PA."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
