import Head from "next/head";
import { Heading, VStack, Flex, Text } from "@chakra-ui/react";
import { Project } from "../components/Project";

export default function Projects() {
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
          <Flex flexDir="column" w="100%" mt="80px" data-aos="fade-right">
            <Heading marginBottom="40px" fontSize={["2rem", "2.5rem", "3.5rem", "4.5rem"]}>
              Projetos
            </Heading>
            <Text fontSize={["1rem", "1.5rem", "1.6rem","2rem"]}>
              Principais projetos até o momento
            </Text>
          </Flex>
         <Project />
         <Project />
         <Project />
      </Flex>

     
    </>
  );
}