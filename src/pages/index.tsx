import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bianca Hoffer</title>
      </Head>

      <Header />
    </>
  )
}
