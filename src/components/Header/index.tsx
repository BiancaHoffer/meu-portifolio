import Link from 'next/link';

import { Flex, Link as LinkChakra, Grid } from '@chakra-ui/react';

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
        w="1140px"
        m="0 auto"
        px="52px"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
      >
        <Flex as='span'/>

        <Flex justify='space-between' align="center">
          <Link href="/" passHref>
            <LinkChakra 
              fontSize={["14px", "18px"]}
              fontWeight="bold" 
              p="4px" 
              color="gray.300" 
              _hover={{textDecoration: 'none', transition: '0.4s', color:'white.100'}}
            >
              Início
            </LinkChakra>
          </Link>

          <Link href="#" passHref>
            <LinkChakra 
              fontSize={["14px", "18px"]}
              fontWeight="bold" 
              p="4px" 
              color="gray.300" 
              _hover={{textDecoration: 'none', transition: '0.4s', color:'white.100'}}
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