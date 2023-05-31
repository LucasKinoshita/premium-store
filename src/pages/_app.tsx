import Head from 'next/head'
import { AppProps } from 'next/app'
import { CartProvider } from 'context/Cart'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Premium Store</title>
        <meta name="description" content="A simple e-commerce" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CartProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default App
