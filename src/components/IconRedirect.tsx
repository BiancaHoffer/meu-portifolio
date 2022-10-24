import { Flex, Icon, Tooltip, Link as LinkChakra  } from "@chakra-ui/react";
import Link from "next/link";

interface IconRedirectProps {
    icon: any;
    href: string;
}

export function IconRedirect({ icon, href }: IconRedirectProps) {
  return (
    <Link href={href} passHref>
        <LinkChakra isExternal variant='with-shadow'>
            <Icon 
                as={icon} 
                w="30px" 
                h="30px" 
                color="white"
                paddingRight="0.5rem"
            />
        </LinkChakra>
    </Link>
  );
}