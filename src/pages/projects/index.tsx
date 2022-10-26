import Head from "next/head";
import { GetStaticProps } from "next";

import { Heading, Flex, Box } from "@chakra-ui/react";

import { Project } from "../../components/Project";
import { HeadingProject } from "../../components/Project/HeadingProject";
import { getPrismicClient } from "../../services/prismic";

import { asImageSrc } from "@prismicio/helpers"

interface ProjectsData {
  projects: {
    uid: string;
    name: string;
    image: {
      url: string;
    };
  }
}

export default function Projects({ projects }: ProjectsData ) {  
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
      >
         <HeadingProject />
         <Project data={projects} />
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