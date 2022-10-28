import { Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

interface NavLinkProps {
    title: string;
    href: string;
}

export function NavLink({ title, href }: NavLinkProps) {
  return (
    <Link href={href} passHref>
        <LinkChakra 
            fontSize={["1rem", "1.2rem"]}
            fontWeight="bold" 
            p="4px" 
            color={useColorModeValue("gray.300", "gray.200")}
            transition="0.4s"
            _hover={{textDecoration: 'none', color:useColorModeValue('white.100', "gray.100")}}
        >
            {title}
        </LinkChakra>
    </Link>
  );
}