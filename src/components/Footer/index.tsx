import Link from "next/link";
import { useRouter } from "next/router";

import { 
  Flex, 
  Text, 
  Button, Link as LinkChakra, 
  useColorModeValue 
} from "@chakra-ui/react";
import { ButtonPink } from "../ButtonPink";

export function Footer() {
  const { asPath } = useRouter();

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
      <Flex mb="32px" data-aos="zoom-in">
        <Link href={asPath}>
          <LinkChakra _hover={{ textDecoration: "none" }}>
            <ButtonPink type="button" title="Voltar ao topo">
              Voltar ao topo
            </ButtonPink>
          </LinkChakra>
        </Link>
        
        {asPath === "/" ? (
          <Link href="/projects" passHref>
            <LinkChakra _hover={{ 
                textDecoration: "none" 
              }}
            >
              <ButtonPink type="button" title="Projetos" ml="16px">
                Projetos
              </ButtonPink>
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
        fontSize={["1rem", "1rem", "1.1rem","1.1rem"]}
        color={useColorModeValue("white.100", "gray.300")}
      >
        Todos os direitos reservados - Bianca Macedo Hoffer Madruga
      </Text>
    </Flex>
  );
}