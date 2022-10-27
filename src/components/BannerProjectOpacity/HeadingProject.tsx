import {  Flex } from '@chakra-ui/react';
import { Heading } from '../Heading';
import { Text } from '../Text';

export function HeadingProject() {
  return (
    <Flex 
      flexDir="column" 
      w="100%" 
      my={["60px", "100px", "140px", "140px"]} 
      
    >
      <Heading 
        title="Projetos" 
        marginBottom={["1rem", "2.5rem", "3rem", "3rem"]}
      />
      
      <Text text='Principais projetos até o momento' />
    </Flex>
  );
}