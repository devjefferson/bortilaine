import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="a simple project starter to work with typescrtipt, react , nextJS and styled components."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App
