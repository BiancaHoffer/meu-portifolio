import Link from 'next/link';

import { Flex, Link as LinkChakra, Grid, Button } from '@chakra-ui/react';

import { Contacts } from './Contacts';

export function Header() {
  return (
    <Flex 
      as='header'
      h="100px"
      w="100%"
      borderBottom="1px" 
      borderColor="gray.400"
    >
      <Grid
        width="1140px"
        margin="0 auto"
        paddingX="52px"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
      >
        <Flex as='span'/>

        <Flex justify='space-between' align="center">
          <Link href="/" passHref>
            <LinkChakra 
              fontWeight="bold" 
              padding="4px" 
              color="gray.300" 
              _hover={{textDecoration: 'none', transition: '0.4s', color:'white'}}
            >
              Início
            </LinkChakra>
          </Link>

          <Link href="#" passHref>
            <LinkChakra 
              fontWeight="bold" 
              padding="4px" 
              color="gray.300" 
              _hover={{textDecoration: 'none', transition: '0.4s', color:'white'}}
            >
              Projetos
            </LinkChakra>
          </Link>

          <Contacts />
        </Flex>
      </Grid>
    </Flex>
  );
}