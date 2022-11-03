import { Button, Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export function ButtonBannerHome() {
  return (
    <Link href="/projects" passHref>
      <LinkChakra
        _hover={{
          textDecoration: "none"
        }}
      >
        <Button
            marginTop={["30px", "38px", "48px", "48px"]}
            fontSize={["14px", "18px", "20px"]}
            w={["134px", "188px", "272px", "272px"]}
            p={["20px", "28px", "32px", "32px"]}
            borderRadius="4px"
            boxShadow='xl'
            colorScheme="pink.500"
            bgColor={useColorModeValue("pink.500", "pink.500")}
            color={useColorModeValue("white.100", "white.100")}
            border="1px"
            borderColor="white.100"
            transition="0.4s"
            _hover={{
                filter: 'brightness(0.8)',
                transition: "0.4s",
            }}
        >
            Projetos
        </Button>
      </LinkChakra>
    </Link>
  );
}