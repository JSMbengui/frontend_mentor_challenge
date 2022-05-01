import { GlobalStyle, theme } from '@assets/theme'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

import { ThemeProvider } from 'styled-components'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App