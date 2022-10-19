import { Text, Heading, Flex, Grid, GridItem, Image } from '@chakra-ui/react'

export function AboutMe() {
  return (
    <Grid 
      alignItems="center" 
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={8}
      
    >
      <GridItem 
        maxWidth="640px" 
        display="flex" 
        flexDirection="column" 
        alignItems="start"
      >
        <Heading 
          fontSize={["38px", "42px", "60px", "60px"]} 
          display="block" 
          marginBottom="80px"
        >
          Sobre mim
        </Heading>

        <Text 
          textAlign="justify" 
          fontSize={["16px", "18px", "22px", "22px"]}
        >
          Sou desenvolvera desde 2021, focada em web e mobile, sempre busco criar páginas modernas e 
          dinâmicas.
          Dedico o máximo do meu tempo para aprender as principais tecnologias do mercado front-end 
          e aplicar em meus projetos. 
          Minha fascinação pelo universo vem desde a adolescência, gosto de compara-lo com a tecnologia, 
          pois ambos estão em constante evolução 🌌.
        </Text>
      </GridItem>

      <GridItem 
        display="flex" 
        justifyContent={["center", "center", "center", "flex-end"]}
      >
        <Flex 
          bgColor="gray.400" 
          h={["200px", "240px", "280px", "280px"]} 
          w={["200px", "240px", "280px", "280px"]} 
          borderRadius="50%"
          justify="center"
          align="center"
        >
          <Image 
            src="/images/me.svg" 
            alt="memoji" 
            h={["119.41px", "167.17px", "214.93px", "214.93px"]} 
            w={["100px", "140px", "180px", "180px"]} 
          /> 
        </Flex>
      </GridItem>
    </Grid>
  );
}