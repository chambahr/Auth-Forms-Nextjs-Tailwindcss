import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Auth login forms with Nextjs and Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <SessionProvider session={pageProps.session}>
         <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
