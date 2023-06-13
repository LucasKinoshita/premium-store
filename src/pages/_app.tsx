import Head from 'next/head'
import { AppProps } from 'next/app'
import { CartProvider } from 'context/Cart'
import GlobalStyles from 'styles/global'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Wrapper } from 'templates/Home/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Premium Store</title>
        <meta name="description" content="A simple e-commerce" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CartProvider>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </Wrapper>
      </CartProvider>
    </>
  )
}

export default App
