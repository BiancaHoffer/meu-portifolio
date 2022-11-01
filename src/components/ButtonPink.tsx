import { Button, ButtonProps, useColorModeValue, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonPinkProps extends ButtonProps {
  children: ReactNode;
}

export function ButtonPink({ children, ...props }: ButtonPinkProps) {  
  return (
    <Button
      bgColor={useColorModeValue("gray.400", "pink.500")}
      color={useColorModeValue("white.100", "white.100")}
      fontSize={["1rem", "1rem", "1.1rem","1.1rem"]}
      fontWeight="normal"
      colorScheme="gray.400"
      boxShadow={useColorModeValue('none', 'xl')}
      transition="0.4s" 
      p="1.5rem"
      _hover={{ filter: 'brightness(0.9)'}}
      {...props}
    >
      {children}
    </Button>
  );
}