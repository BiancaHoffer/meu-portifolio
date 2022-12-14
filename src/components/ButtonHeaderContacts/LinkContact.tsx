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
        p="8px"
        display="flex"
        alignItems="center"
        fontSize={["14px", "18px"]}
        variant='with-shadow'
        color="white.100"
        transition="0.3s"
        _hover={{
          textDecoration: 'none',
          paddingLeft: '4px',
        }}
        {...rest}
      >
        <Icon 
          as={icon} 
          w="26px" 
          h="26px" 
          paddingRight="8px"
          color='#DB2090' 
        />
        { name }
      </LinkChakra>
    </Link>
  );
}