import Head from 'next/head';
import { GetStaticProps } from "next";

import { useColorModeValue, VStack } from '@chakra-ui/react';

import { getPrismicClient } from '../services/prismic';
import { asText } from "@prismicio/helpers"

import { BannerHome } from '../components/BannerHome';
import { MainTechnologies } from '../components/MainTechnologies';
import { AboutMe } from '../components/AboutMe';

export interface Banner {
  result: {
    title: string;
    subtitle: string;
  }
}

export interface HomeProps {
  data: {
    video: string;
    result: Banner;
  }
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, nofollow" />
        <meta name="description" content="Portfólio de Bianca Macedo Hoffer Madruga" />
        <title>Home | Bianca Hoffer</title>
      </Head>

      <VStack 
        as='main'
        w="100%" 
        bgColor={useColorModeValue("gray.800", "white.100")}
      >  
        <BannerHome data={data} />
        <AboutMe />
        <MainTechnologies />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const video = "/videos/galaxy.mp4";

  const prismic = getPrismicClient({});
  
  const response = await prismic.getByType('home', {});

  const result = response.results.map(i => {
    return {
      title: i.data.title,
      subtitle: asText(i.data.subtitle),
    }
  });

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
