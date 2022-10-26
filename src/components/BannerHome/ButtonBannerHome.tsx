import { Button, Link as LinkChakra } from '@chakra-ui/react';
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
            colorScheme="gray.800"
            bgColor="gray.800"
            borderRadius="4px"
            transition="0.3s"
            _hover={{
                filter: 'brightness(0.8)',
            }}
        >
            Projetos
        </Button>
      </LinkChakra>
    </Link>
  );
}