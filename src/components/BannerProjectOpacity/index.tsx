import { useState } from "react";

import Head from "next/head";

import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

import { ImageProject } from "./ImageProject";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { Heading } from "../Heading";

// exported type from page Projects
import { Projects } from "../../pages/projects";


interface ProjectsProps {
  data: Projects[]
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
              h={["260px", "400px", "600px", "800px"]}
              border="1px"
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
                  mb={["1rem", "2rem", "2.5rem"]}
                  color={useColorModeValue("white.100", "gray.350")}
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