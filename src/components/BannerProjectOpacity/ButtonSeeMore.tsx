import { Button, Icon, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightCircle } from 'react-icons/bs';

interface ButtonSeeMoreProps {
  slug: string;
}

export function ButtonSeeMore({ slug }: ButtonSeeMoreProps) {
  return (
    <Button
      w="100%" 
      justifyContent="start"
      fontSize={["0.8rem", "1.5rem", "1.6rem", "2rem"]}
      px="1"
      h="0"
      variant="transparent"
      transition="0.4s"
      _hover={{
        color: "#DB2090",
      }}
    >
      <Link href={`/projects/${slug}`} passHref>
        <LinkChakra _hover={{ textDecoration: "none" }}>
          Saiba mais
        </LinkChakra>
      </Link>

      <Icon
        as={BsArrowRightCircle}
        w={["0.5rem", "1.5rem", "1.6rem"]}
        ml={["4px", "8px"]}
      />
    </Button>
  );
}