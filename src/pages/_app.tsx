import Head from 'next/head'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="A project starter" />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
