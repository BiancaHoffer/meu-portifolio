import Head from "next/head";

import { Flex } from "@chakra-ui/react";

import { ImageProject } from "./ImageProject";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { HeadingProject } from "./HeadingProject";

export function Project() {
  return (
    <>
      <Head>
        <title>Projetos | Bianca Hoffer</title>
      </Head>

      <Flex 
        w="100%" 
        position="relative" 
        borderRadius="4px" 
        borderBottom="1px" 
        borderColor="gray.400"
        py={["40px", "80px", "120px", "140px"]}
        data-aos="fade-right"
      >
        <ImageProject />

        <Flex 
          position="absolute" 
          flexDir="column" 
          margin={["1rem", "1.5rem", "2rem", "2rem"]} 
          data-aos="zoom-in"
        >
          <HeadingProject />
          <ButtonSeeMore />
        </Flex>
      </Flex>  
    </>
  );
}