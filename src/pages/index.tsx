import Head from 'next/head';
import { Flex, VStack, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bianca Hoffer</title>
      </Head>

      <VStack as='main'>
        <Banner />

        <VStack>
          <Text>Teste</Text>
        </VStack>
      </VStack>
    </>
  )
}
