import { Image } from "@chakra-ui/react";

interface ImageProjectProps {
  src: string;
}

export function ImageProject({ src }: ImageProjectProps) {
  return (
    <Image 
        src={src} 
        alt="imagem projeto" 
        borderRadius="4px" 
        opacity="0.2"
        transition="0.8s"
        _hover={{
        opacity: "0.6",
        }}
    />
  );
}