import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://codeitlinkbrary.netlify.app" />
        <meta property="og:image" content="images/description.png" />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해보세요"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
