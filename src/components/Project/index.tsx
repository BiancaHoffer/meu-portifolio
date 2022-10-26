import Head from "next/head";

import { Flex, Box } from "@chakra-ui/react";

import { ImageProject } from "./ImageProject";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { Heading } from "../Heading";

interface ProjectData {
  data: {
    uid: string;
    name: string;
    image: {
      url: string;
    };
  }
}

export function Project({ data }) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Projetos | Bianca Hoffer</title>
      </Head>

      { data.map(i => {
          return (
        <Flex 
          key={i.uid}
          w="100%" 
          position="relative" 
          borderRadius="4px" 
          borderBottom="1px" 
          borderColor="gray.400"
          paddingY={["60px", "100px", "140px", "140px"]}
          data-aos="fade-right"
        >
          <ImageProject src={i.image.url} />
          <Flex
            position="absolute"
            flexDir="column"
            margin={["1rem", "1.5rem", "2rem", "2rem"]}
            data-aos="zoom-in"
          >
            <Heading
              title={i.name}
              mb={["1rem", "2rem", "2.5rem"]}
            />
            <ButtonSeeMore slug={i.uid}/>
          </Flex>
        </Flex> 
       )
      })} 
    </>
  );
}