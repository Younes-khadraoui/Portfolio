import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Younes Khadraoui's portfolio website"
        />
        <meta
          name="keywords"
          content="Younes Khadraoui, web developer, portfolio"
        />
        <meta name="author" content="Younes Khadraoui" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
