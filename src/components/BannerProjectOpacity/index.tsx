import Head from "next/head";

import { Flex, useColorModeValue, Button } from "@chakra-ui/react";

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
              borderTop="1px" 
              borderColor={useColorModeValue("gray.400", "gray.100")}
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
                  color={useColorModeValue("white.100", "gray.350")}
                  mb={["1rem", "2rem", "2.5rem"]}
                  data-aos="zoom-in"

                />
                <ButtonSeeMore slug={project.uid}/>
              </Flex>
            </Flex> 
          )  
      })} 
    </>
  );
}