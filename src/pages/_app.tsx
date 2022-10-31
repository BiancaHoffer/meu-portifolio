import { useEffect } from "react";
import { AppProps } from "next/app";

import Aos from "aos";
import 'aos/dist/aos.css'

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import '../styles/global.scss';

import { Header } from '../components/Header';
import { SidebarDrowerProvider } from "../context/SidebarDrowerContent";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { 
    Aos.init({ duration: 1000 });
  }, [])
  
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrowerProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SidebarDrowerProvider>
    </ChakraProvider>
  )
}

export default MyApp
