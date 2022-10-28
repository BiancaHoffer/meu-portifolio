import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Text, Button, Link as LinkChakra, useColorModeValue } from "@chakra-ui/react";

export function Footer() {
  const { pathname, asPath } = useRouter();

  return (
    <Flex
      w="100%"
      margin="0 auto"
      paddingY={["80px", "80px", "140px", "4rem"]}
      px="52px"
      borderTop="1px"
      borderColor={useColorModeValue("gray.400", "gray.100")}
      flexDirection="column"
      bgColor={useColorModeValue("gray.700", "white.100")}
      alignItems="center"
    >
      <Flex mb="32px">
        <Link href={asPath}>
          <LinkChakra _hover={{ textDecoration: "none" }}>
            <Button
              w="120px" 
              mx="8px"
              bgColor={useColorModeValue("gray.400", "pink.500")}
              color={useColorModeValue("white.100", "white.100")}
              colorScheme="gray.400"
              boxShadow={useColorModeValue('none', 'xl')}
              transition="0.3s" 
              _hover={{ filter: 'brightness(0.9)' }} 
              data-aos="zoom-in"
            >
              Volta ao topo
            </Button>
          </LinkChakra>
        </Link>
        
        {asPath === "/" ? (
          <Link href="/projects"  passHref>
            <LinkChakra _hover={{ textDecoration: "none" }}>
              <Button 
                w="120px"
                mx="8px" 
                bgColor={useColorModeValue("gray.400", "pink.500")}
                color={useColorModeValue("white.100", "white.100")}
                colorScheme="gray.400"
                transition="0.2s" 
                boxShadow={useColorModeValue('none', 'xl')}  
                _hover={{ filter: 'brightness(0.9)'}}
                data-aos="zoom-in"
              >
                Projetos
              </Button>
            </LinkChakra>
          </Link>
        ): ''}
      </Flex>
      
      <Text 
        py="8px" 
        textAlign="center" 
        textDecor="underline"
        fontSize={["16px", "16px", "18px", "18px"]} 
        color={useColorModeValue("white.100", "gray.300")}
      >
        bianca.mhm1@gmail.com
      </Text>
      <Text 
        py="8px" 
        textAlign="center" 
        fontSize={["16px", "16px", "18px", "18px"]}
        color={useColorModeValue("white.100", "gray.300")}
      >
        Todos os direitos reservados - Bianca Macedo Hoffer Madruga
      </Text>
    </Flex>
  );
}