import { useState } from 'react';

import Head from "next/head";
import { GetStaticProps } from "next";

import axios from 'axios';

import { Flex, useColorModeValue, IconButton, Button } from "@chakra-ui/react";
import { MdOutlineAdd } from 'react-icons/md';

import { getPrismicClient } from "../../services/prismic";
import { asImageSrc } from "@prismicio/helpers";
import { HeadingProject } from "../../components/BannerProjectOpacity/HeadingProject";
import { BannerProjectOpacity } from "../../components/BannerProjectOpacity";


export interface Projects {
  uid?: string;
  name: string;
  image: {
    url: string;
  };
}

interface ProjectsData {
  next_page: string | null;
  projectsData: Projects[];
}

interface ProjectsProps {
  projects: ProjectsData;
}

export default function Projects({ projects }: ProjectsProps) { 
  const [projectsList, setProjectsList] = useState(projects.projectsData);
  const [nextPage, setNextPage] = useState(projects.next_page);

  async function handleLoadProjects() {
    const response = await axios.get(nextPage)
    const data = response.data
    const results = parseData(data)
    setProjectsList([...projectsList, ...results])
    setNextPage(data.next_page)
  }

  return (
    <>
      <Head>
        <title>Projetos | Bianca Hoffer</title>
      </Head>

      <Flex w="100%" bgColor={useColorModeValue("gray.800", "white.100")}>
        <Flex
          as="main"
          maxW="1140px"
          px="52px"
          margin="0 auto"
          flexDir="column"
          justify="center"
          align="center"
          bgColor={useColorModeValue("gray.800", "white.100")}
        >
           <HeadingProject />
           <BannerProjectOpacity data={projectsList} />
        </Flex>
      </Flex>

      <Flex 
        w="100%" 
        bgColor={useColorModeValue("gray.800", "white.100")} 
        pb={["1rem", "2.5rem", "3rem", "3rem"]}
      >
        {projects.next_page && (
          <Flex 
            w="1140px" 
            margin="0 auto" 
            px="52px" bgColor={useColorModeValue("gray.800", "white.100")} 
          >
            <Button 
              onClick={handleLoadProjects}
              variant="solid"
              fontSize="2rem"
              fontWeight="normal"
              color="white.100"
              colorScheme="pink.400"
              bgColor="pink.500"
              cursor="pointer"
              transition="0.4s"
              _hover={{ filter: 'brightness(0.8)' }}
            >
              +
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
}

function parseData(response) {
  const parsed = response.results.map((project) => {
    return {
      uid: project.uid,
      name: project.data.name,
      image: {
        url: asImageSrc(project.data.image),
      },
    }
  }) 
  return parsed;
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const response = await prismic.getByType('project', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    fetch: ['project.name', 'project.image'],
    pageSize: 4,
    page: 1,
  })

  const projectsData = response.results.map(project => {
    return {
      uid: project.uid,
      name: project.data.name,
      image: {
        url: asImageSrc(project.data.image),
      },
    }
  }) 

  const { next_page, } = response;

  const projects = { next_page, projectsData };

  return {
    props: { 
      projects
    },
    revalidate: 60 * 60 * 30
  }
}