import { Image } from "@chakra-ui/react";

export function ImageProject() {
  return (
    <Image 
        src="/images/spacetraveling.png"  
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