import { ChakraProps, Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';

import Link from 'next/link';

interface NavLinkProps extends ChakraProps {
  title: string;
  href: string;
}

export function NavLink({ title, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} passHref>
        <LinkChakra 
            p="4px" 
            fontSize={["1rem", "1.2rem"]}
            fontWeight="bold" 
            color={useColorModeValue("gray.300", "gray.200")}
            transition="0.4s"
            _hover={{
              textDecoration: 'none', 
              color:useColorModeValue('white.100', "gray.100")
            }}
            {...props}
        >
            {title}
        </LinkChakra>
    </Link>
  );
}