import { GridItem } from '@chakra-ui/react'
import { Heading } from '../Heading';
import { Text } from '../Text';

export function AboutMeText() {
  return (
    <GridItem 
        w="100%"
        maxWidth="640px" 
        display="flex" 
        flexDirection="column" 
      >
        <Heading 
          title='Sobre mim' 
          textAlign={["center", "center", "start", "start"]}
          marginBottom={["40px", "80px", "100px", "100px"]}
        />

        <Text text='
          Sou desenvolvera desde 2021, focada em web e mobile. Sempre busco criar páginas modernas e 
          dinâmicas.
          Dedico o máximo do meu tempo para aprender as principais tecnologias do mercado front-end 
          e aplicar em meus projetos.
          '  
          w={["100%", "100%", "600px", "600px"]}
        />
      </GridItem>
  );
}