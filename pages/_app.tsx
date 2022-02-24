import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Auth login forms with Nextjs and Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
