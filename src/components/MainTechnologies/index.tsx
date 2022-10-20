import { Heading, Flex, Grid  } from '@chakra-ui/react'
import { Icon } from './icon';
import { SiTypescript, SiReact, SiCss3, SiHtml5 } from 'react-icons/si'

export function MainTechnologies() {
  return (
    <Flex
      w="100%"
      flexDirection="column" 
    >
      <Heading
        fontSize={["38px", "42px", "60px", "60px"]}
        marginBottom={["40px", "80px", "100px", "100px"]}
        textAlign={["center", "center", "start", "start"]}
      >
        Principais Tecnologias
      </Heading>
    
      <Grid 
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
        gap={8}
      >
        <Icon title="HTML" icon={SiHtml5} />
        <Icon title="CSS" icon={SiCss3} />
        <Icon title="React JS" icon={SiReact} />
        <Icon title="Type Script" icon={SiTypescript} />  
      </Grid>
    </Flex>
  );
}