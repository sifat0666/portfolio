import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from './../utils/theme'
// import Fonts from '../components/Fonts'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
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
  ) 
}

export default MyApp
