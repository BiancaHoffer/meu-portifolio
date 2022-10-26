import Head from "next/head";

import { Flex } from "@chakra-ui/react";

import { ImageProject } from "./ImageProject";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { Heading } from "../Heading";

interface Project {
  uid: string;
  name: string;
  image: {
    url: string; 
  };
}

interface ProjectsProps {
  data: Project[]
}

export function BannerProjectOpacity({ data }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos | Bianca Hoffer</title>
      </Head>

      { data.map(project => {
          return (
            <Flex 
              key={project.uid}
              w="100%" 
              position="relative" 
              borderRadius="4px" 
              borderBottom="1px" 
              borderColor="gray.400"
              paddingY={["60px", "100px", "140px", "140px"]}
            >
              <ImageProject src={project.image.url} />
              <Flex
                position="absolute"
                flexDir="column"
                margin={["1rem", "1.5rem", "2rem", "2rem"]}
              >
                <Heading
                  title={project.name}
                  mb={["1rem", "2rem", "2.5rem"]}
                />
                <ButtonSeeMore slug={project.uid}/>
              </Flex>
            </Flex> 
          )  
      })} 
    </>
  );
}