import { Text, Heading, GridItem } from '@chakra-ui/react'

export function AboutMeText() {
  return (
    <GridItem 
        maxWidth="640px" 
        display="flex" 
        flexDirection="column" 
        alignItems="start"
      >
        <Heading 
          fontSize={["38px", "42px", "60px", "60px"]} 
          display="block" 
          marginBottom={["40px", "80px", "100px", "100px"]}
        >
          Sobre mim
        </Heading>

        <Text 
          textAlign="justify" 
          fontSize={["16px", "18px", "22px", "22px"]}
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