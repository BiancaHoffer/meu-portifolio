import { Flex, Grid, GridItem, Image, Heading, Text, useBreakpointValue, Button, Icon } from "@chakra-ui/react";
import Head from "next/head";
import { IconTechnologies } from "./IconTechnologies";
import { IconRedirect } from './IconRedirect'
import Link from "next/link";
import { BsArrowRightCircle } from 'react-icons/bs'

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
        py={["80px", "140px", "200px", "200px"]}
        data-aos="fade-right"
      >
        <Image 
          src="/images/spacetraveling.png"  
          alt="imagem projeto" 
          borderRadius="4px" 
          
        />

        <Flex 
          position="absolute" 
          flexDir="column" 
          margin={["0.5rem", "1.5rem", "2rem", "2rem"]} 
          data-aos="zoom-in"
        >
          <Heading
            fontSize={["1rem", "2.5rem", "3.5rem", "4.5rem"]}
            mb={["0.5rem", "1rem","2.5rem"]}
            >
              Ig.newss
            </Heading>
            <Button
              fontSize={["0.5rem", "1.5rem", "1.6rem","2rem"]}
              p="0"
              h="0"
              transition="0.4s"
              _hover={{
                color: "#DB2090",
              }}
            >
              Saiba mais
              <Icon 
                as={BsArrowRightCircle} 
                w={["0.5rem", "1.5rem", "1.6rem"]} 
                ml={["4px", "8px"]} 
              />
            </Button>
        </Flex>
      </Flex>  
    </>
  );
}


/*opacity="0.1"
          transition="0.8s"
          _hover={{
            opacity: "0.6",
          }}*/