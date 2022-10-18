import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import '../styles/global.scss';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
