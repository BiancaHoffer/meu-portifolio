import { useEffect } from 'react';

import Head from 'next/head';

import { VStack } from '@chakra-ui/react'

import Aos from 'aos';
import 'aos/dist/aos.css'

import { Banner } from '../components/Banner';
import { AboutMe } from '../components/AboutMe';
import { MainTechnologies } from '../components/MainTechnologies';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  
  return (
    <>
      <Head>
        <title>Home | Bianca Hoffer</title>
      </Head>

      <VStack 
        as='main'
        w="100%" 
      >  
        <Banner />
        <AboutMe />
        <MainTechnologies />
      </VStack>
    </>
  )
}
