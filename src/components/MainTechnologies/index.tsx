import { Icon as IconFy } from '@iconify/react';
import { Text, Heading, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { Icon } from './icon';

export function MainTechnologies() {
  return (
    <Flex
      w="100%"
      flexDirection="column" 
    >
      <Flex alignItems="start">
        <Heading
          fontSize={["38px", "42px", "60px", "60px"]}
          display="block"
          marginBottom={["40px", "80px", "100px", "100px"]}
        >
          Principais Tecnologias
        </Heading>
      </Flex>

      <Grid 
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
        gap={8}
      >
        <Icon title="HTML" src="/images/html.png" />
        <Icon title="CSS"src="/images/css.png" />
        <Icon title="Type Script"src="/images/ts.png" />
        <Icon title="React JS"src="/images/react.png" />
      </Grid>
    </Flex>
  );
}