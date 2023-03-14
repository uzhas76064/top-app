import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Head>
          <title>My top - наш лучший топ</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
