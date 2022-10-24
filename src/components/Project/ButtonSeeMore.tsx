import { Button, Icon } from "@chakra-ui/react";
import { BsArrowRightCircle } from 'react-icons/bs';

export function ButtonSeeMore() {
  return (
    <Button
      fontSize={["0.8rem", "1.5rem", "1.6rem", "2rem"]}
      p="0"
      h="0"
      transition="0.4s"
      _hover={{
        color: "#DB2090",
      }}
    >
      Saiba mais
      <Icon
        as={BsArrowRightCircle}
        w={["0.5rem", "1.5rem", "1.6rem"]}
        ml={["4px", "8px"]}
      />
    </Button>
  );
}