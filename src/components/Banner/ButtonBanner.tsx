import { Button, Link as LinkChakra } from '@chakra-ui/react';
import Link from 'next/link';

export function ButtonBanner() {
  return (
    <Link href="/projects" passHref>
      <LinkChakra>
        <Button
            marginTop={["30px", "38px", "48px", "48px"]}
            fontSize={["14px", "18px", "20px"]}
            w={["134px", "188px", "272px", "272px"]}
            p={["20px", "28px", "32px", "32px"]}
            bgColor="gray.800"
            borderRadius="4px"
            _hover={{
                transition: '0.4s',
                filter: 'brightness(0.8)'
            }}
        >
            Projetos
        </Button>
      </LinkChakra>
    </Link>
  );
}