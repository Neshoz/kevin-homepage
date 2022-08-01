import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app'
import { Layout, Head } from '../components';
import theme from '../theme';

function Website({ Component, pageProps, router }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <Layout>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={onExitComplete}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Head>
    </ChakraProvider>
  )
}

export default Website
