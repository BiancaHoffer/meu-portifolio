import { Flex, Icon, Tooltip, Link as LinkChakra  } from "@chakra-ui/react";
import Link from "next/link";

interface IconRedirectProps {
    icon: any;
    href: string;
}

export function IconRedirect({ icon, href }: IconRedirectProps) {
  return (
    <Link href={href} passHref >
        <LinkChakra isExternal variant='with-shadow'>
            <Icon 
                as={icon} 
                w={["1.5rem", "2.5rem"]}
                h={["1.5rem", "2.5rem"]}
                color="white"
            />
        </LinkChakra>
    </Link>
  );
}