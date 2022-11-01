import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonPinkProps extends ButtonProps {
  title: string | any;
}

export function ButtonPink({ title, ...props }: ButtonPinkProps) {
  return (
    <Button
      w="120px"
      bgColor={useColorModeValue("gray.400", "pink.500")}
      color={useColorModeValue("white.100", "white.100")}
      fontSize={["1rem", "1rem", "1.2rem","1.2rem"]}
      fontWeight="normal"
      colorScheme="gray.400"
      boxShadow={useColorModeValue('none', 'xl')}
      transition="0.4s" 
      p="1.5rem"
      _hover={{ filter: 'brightness(0.9)'}}
      {...props}
    >
      {title}
    </Button>
  );
}