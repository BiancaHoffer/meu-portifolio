import { useEffect, useState } from 'react';

import Head from 'next/head';
import { GetStaticProps } from "next"

import { VStack } from '@chakra-ui/react'

import Aos from 'aos';
import 'aos/dist/aos.css'

import { getPrismicClient } from '../services/prismic';
import { asText } from "@prismicio/helpers"

import { Banner } from '../components/Banner';
import { AboutMe } from '../components/AboutMe';
import { MainTechnologies } from '../components/MainTechnologies';

export default function Home({ data }) {
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
        <Banner data={data} />
        <AboutMe />
        <MainTechnologies />
        a
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const video = "/videos/galaxy.mp4"

  const prismic = getPrismicClient({})
  
  const response = await prismic.getByType('home', {})

  const result = response.results.map(i => {
    return {
      title: i.data.title,
      subtitle: asText(i.data.subtitle),
    }
  })

  return {
    props: {
      data: {
        video,
        result,
      }
    }, 
    revalidate: 60 * 60 * 30
  }
}
