import Link from 'next/link';

import {
  Link as LinkChakra,
  ChakraProps,
  Icon,
} from '@chakra-ui/react';

interface LinkContactProps extends ChakraProps{
  href: string;
  name: string;
  icon: any;
}

export function LinkContact({ href, name, icon, ...rest }: LinkContactProps) {
  return (
    <Link href={href} passHref>
      <LinkChakra
        isExternal
        variant='with-shadow'
        padding="8px"
        display="flex"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
          paddingLeft: '4px',
          transition: '0.3s'
        }}
        {...rest}
      >
        <Icon 
          as={icon} 
          w="26px" 
          h="26px" 
          color='#DB2090' 
          paddingRight="8px"
        />
        { name }
      </LinkChakra>
    </Link>
  );
}