import { Flex, GridItem, Image, useColorModeValue } from '@chakra-ui/react';

export function Memoji() {
  return (
    <GridItem 
        display="flex" 
        justifyContent={["center", "center", "center", "flex-end"]}
      >
        <Flex 
           bgColor={useColorModeValue("gray.400", "gray.100")} 
          h={["200px", "240px", "280px", "280px"]} 
          w={["200px", "240px", "280px", "280px"]} 
          borderRadius="50%"
          justify="center"
          align="center"
          boxShadow='xl'
          data-aos="zoom-in"
        >
          <Image 
            src="/images/me.svg" 
            alt="memoji" 
            h={["119.41px", "167.17px", "214.93px", "214.93px"]} 
            w={["100px", "140px", "180px", "180px"]} 
            data-aos="zoom-in"
          /> 
        </Flex>
      </GridItem>
  );
}