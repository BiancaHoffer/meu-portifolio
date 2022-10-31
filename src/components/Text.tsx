import { 
  Text as TextChakra, 
  ChakraProps, 
  useColorModeValue 
} from "@chakra-ui/react";

interface TextProps extends ChakraProps {
    text: string;
}

export function Text({ text, ...spreed }: TextProps) {
  return (
    <TextChakra
        textAlign="justify" 
        fontSize={["1rem", "1.5rem", "1.6rem","2rem"]}
        color={useColorModeValue("white.100", "gray.300")}
        {...spreed}
    >
        { text }
    </TextChakra>
  );
}