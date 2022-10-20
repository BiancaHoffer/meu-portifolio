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
            fontSize={["14px", "18px"]}
            fontWeight="bold" 
            p="4px" 
            color="gray.300" 
            _hover={{textDecoration: 'none', transition: '0.4s', color:'white.100'}}
        >
            {title}
        </LinkChakra>
    </Link>
  );
}