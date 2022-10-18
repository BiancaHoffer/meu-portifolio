import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Flex, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bianca Hoffer</title>
      </Head>

      <VStack as='main'>
        <Banner />
      </VStack>
    </>
  )
}
