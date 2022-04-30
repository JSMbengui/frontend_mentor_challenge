import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Advice Generator</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="Joel Mbengui" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
