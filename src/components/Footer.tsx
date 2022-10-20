import { Flex, Text, Button, Link as LinkChakra } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router";
export function Footer() {
  const { pathname } = useRouter();


  
  return (
    <Flex
      w="100%"
      margin="0 auto"
      paddingY={["80px", "140px", "200px", "200px"]}
      px="52px"
      borderTop="1px"
      borderColor="gray.400"
      flexDirection="column"
      alignItems="center"
    >
      <Flex mb="32px">
        <Link href={pathname}>
          <Button w="120px" mx="8px"bgColor="gray.400" color="white.100">Volta ao topo</Button>
        </Link>
        
        {pathname === "/" ? (
          <Link href="/projects">
          <LinkChakra>
            <Button w="120px" mx="8px"bgColor="gray.400" color="white.100">Projetos</Button>
          </LinkChakra>
        </Link>
        ): ''}
      </Flex>
      
      <Text py="8px" textAlign="center">bianca.mhm1@gmail.com</Text>
      <Text py="8px" textAlign="center">Todos os direitos reservados - Bianca Macedo Hoffer Madruga</Text>
    </Flex>
  );
}