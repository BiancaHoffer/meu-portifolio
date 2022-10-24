import { Link as LinkChakra } from '@chakra-ui/react';
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
            color="gray.300" 
            transition="0.4s"
            _hover={{textDecoration: 'none', color:'white.100'}}
        >
            {title}
        </LinkChakra>
    </Link>
  );
}