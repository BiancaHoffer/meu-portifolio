import { 
  useColorModeValue, 
  Textarea as TextAreaChakra, 
  TextareaProps 
} from "@chakra-ui/react";

interface TextAreaProps extends TextareaProps{
  placeholder: string;
}

export function TextArea({ placeholder, ...props }: TextAreaProps) {
  return (
    <TextAreaChakra
      placeholder={placeholder}
      _placeholder={{ color:useColorModeValue('gray.300', "gray.100")}}
      p="1.5rem" 
      focusBorderColor="pink.500"
      color={useColorModeValue("white.100", "gray.300")}
      borderColor={useColorModeValue("gray.400", "gray.100")}
      transition="0.4s"
      _hover={{ borderColor: "pink.500"}}
      {...props}
    />
  );
}