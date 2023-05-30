import Head from 'next/head'
import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import { CartProvider } from 'hooks/useCart'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="A project starter" />
      </Head>
      <CartProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default App
