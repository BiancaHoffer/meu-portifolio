import Link from "next/link";
import { useRouter } from "next/router";
import { Flex, Text, Button, Link as LinkChakra } from "@chakra-ui/react";

export function Footer() {
  const { pathname } = useRouter();

  return (
    <Flex
      w="100%"
      margin="0 auto"
      paddingY={["80px", "80px", "140px", "140px"]}
      px="52px"
      borderTop="1px"
      borderColor="gray.400"
      flexDirection="column"
      alignItems="center"
    >
      <Flex mb="32px">
        <Link href={pathname}>
          <Button w="120px" mx="8px"bgColor="gray.400" color="white.100" data-aos="zoom-in">
            Volta ao topo
          </Button>
        </Link>
        
        {pathname === "/" ? (
          <Link href="/projects">
            <LinkChakra>
              <Button w="120px" mx="8px"bgColor="gray.400" color="white.100" data-aos="zoom-in">
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
        data-aos="fade-up"
      >
        bianca.mhm1@gmail.com
      </Text>
      <Text 
        py="8px" 
        textAlign="center" 
        fontSize={["16px", "16px", "18px", "18px"]}
        data-aos="fade-up"
      >
        Todos os direitos reservados - Bianca Macedo Hoffer Madruga
      </Text>
    </Flex>
  );
}