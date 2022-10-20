import Head from 'next/head';
import { VStack  } from '@chakra-ui/react'
import { Banner } from '../components/Banner';
import { AboutMe } from '../components/AboutMe';
import { MainTechnologies } from '../components/MainTechnologies';


export default function Home() {
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

        <VStack
          w="100%"
          maxWidth="1140px"
          marginX="0 auto"
          paddingY={["80px", "140px", "200px", "200px"]}
          px="52px"
          borderBottom="1px"
          borderColor="gray.400"
        >
          <AboutMe />
        </VStack>

        <VStack
          w="100%"
          maxWidth="1140px"
          marginX="0 auto"
          paddingY={["80px", "140px", "200px", "200px"]}
          px="52px"
        >
          <MainTechnologies />
        </VStack>
      </VStack>
    </>
  )
}
