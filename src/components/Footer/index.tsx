import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Text, Button, Link as LinkChakra } from "@chakra-ui/react";

export function Footer() {
  const { pathname, asPath } = useRouter();

  return (
    <Flex
      w="100%"
      margin="0 auto"
      paddingY={["80px", "80px", "140px", "4rem"]}
      px="52px"
      borderTop="1px"
      borderColor="gray.400"
      flexDirection="column"
      bgColor="gray.700"
      alignItems="center"
    >
      <Flex mb="32px">
        <Link href={asPath}>
          <LinkChakra _hover={{ textDecoration: "none" }}>
            <Button
              w="120px" 
              mx="8px"
              bgColor="gray.400" 
              colorScheme="gray.400"
              color="white.100" 
              transition="0.3s" 
              data-aos="zoom-in"
              _hover={{ filter: 'brightness(0.8)' }} 
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
                bgColor="gray.400" 
                colorScheme="gray.400"
                color="white.100" 
                transition="0.3s" 
                data-aos="zoom-in"
                _hover={{ filter: 'brightness(0.8)' }}
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
      >
        bianca.mhm1@gmail.com
      </Text>
      <Text 
        py="8px" 
        textAlign="center" 
        fontSize={["16px", "16px", "18px", "18px"]}
      >
        Todos os direitos reservados - Bianca Macedo Hoffer Madruga
      </Text>
    </Flex>
  );
}