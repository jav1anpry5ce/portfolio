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
        <meta
          name="google-site-verification"
          content="Jvl6IV3Hsp4Q2LKMU-RPOJKuSCeyc270CKS5p5uRqUw"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
