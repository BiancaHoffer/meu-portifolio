import {  Flex } from '@chakra-ui/react';
import { Heading } from '../Heading';
import { Text } from '../Text';

export function HeadingProject() {
  return (
    <Flex 
      flexDir="column" 
      w="100%" 
      mt={["40px", "80px", "100px", "100px"]} 
      data-aos="fade-right" 
    >
      <Heading 
        title="Projetos" 
        marginBottom={["1rem", "2.5rem", "3rem", "3rem"]}
      />
      
      <Text text='Principais projetos até o momento' />
    </Flex>
  );
}