import Head from "next/head";
import { GetStaticProps } from "next";

import { Flex } from "@chakra-ui/react";

import { getPrismicClient } from "../../services/prismic";
import { asImageSrc } from "@prismicio/helpers";
import { HeadingProject } from "../../components/BannerProjectOpacity/HeadingProject";
import { BannerProjectOpacity } from "../../components/BannerProjectOpacity";
import { useEffect } from "react";
import Aos from "aos";




export default function Projects({ projects }) {  
  return (
    <>
      <Head>
        <title>Projetos | Bianca Hoffer</title>
      </Head>

      <Flex
        as="main"
        w="100%"
        maxW="1140px"
        px="52px"
        margin="0 auto"
        flexDir="column"
        justify="center"
        align="center"
        data-aos="fade-right"
      >
         <HeadingProject />
         <BannerProjectOpacity data={projects} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const response = await prismic.getByType('project', {
    fetch: ['project.name', 'project.image'],
    pageSize: 20,
  })

  const projects = response.results.map(project => {
    return {
      uid: project.uid,
      name: project.data.name,
      image: {
        url: asImageSrc(project.data.image),
      },
    }
  }) 

  return {
    props: { 
      projects
    },
    revalidate: 60 * 60 * 30
  }
}