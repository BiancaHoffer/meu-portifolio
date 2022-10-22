import { Text, Heading, GridItem } from '@chakra-ui/react'

export function AboutMeText() {
  return (
    <GridItem 
        maxWidth="640px" 
        display="flex" 
        flexDirection="column" 
        data-aos="fade-down"
      >
        <Heading 
          fontSize={["2rem", "2.5rem", "3.5rem", "4.5rem"]}
          marginBottom={["40px", "80px", "100px", "100px"]}
          textAlign={["center", "center", "start", "start"]}
        >
          Sobre mim
        </Heading>

        <Text 
          textAlign="justify" 
          fontSize={["1rem", "1.5rem", "1.6rem","2rem"]}
          width={["200px", "400px", "600px", "600px"]}
        >
          Sou desenvolvera desde 2021, focada em web e mobile, sempre busco criar páginas modernas e 
          dinâmicas.
          Dedico o máximo do meu tempo para aprender as principais tecnologias do mercado front-end 
          e aplicar em meus projetos. 
         
        </Text>
      </GridItem>
  );
}