import { Image, Flex, useColorModeValue } from "@chakra-ui/react";

interface ImageProjectProps {
  src: string;
}

export function ImageProject({ src }: ImageProjectProps) {
  return (
    <Image 
        src={src} 
        alt="imagem projeto" 
        borderRadius="4px" 
        boxShadow={useColorModeValue('none', 'xl')}
        opacity={useColorModeValue("0.2", "0.3")}
        transition="0.8s"
        _hover={{
          opacity: "0.6",
        }}
    />
  );
}