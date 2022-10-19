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
        fontSize={["14px", "18px"]}
        variant='with-shadow'
        p="8px"
        display="flex"
        alignItems="center"
        color="white.100"
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