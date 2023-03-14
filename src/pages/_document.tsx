import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="ru">
      <Head />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"  rel="stylesheet" />
        <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
