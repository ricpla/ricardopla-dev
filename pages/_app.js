import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      {/* Addsense Script */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5999025069095052"
        crossOrigin="anonymous"
      />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default Website
