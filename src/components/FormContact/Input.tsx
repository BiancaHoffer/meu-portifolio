import { 
  FormControl, 
  FormHelperText, 
  Input as InputChakra, 
  InputProps as InputPropsChakra,
  useColorModeValue
} from "@chakra-ui/react";

interface InputProps extends InputPropsChakra {
  placeholder: string;
  helperText?: string;  
}

export function Input({ placeholder, helperText, ...props }: InputProps) {
  return (
    <FormControl>
      <InputChakra 
        placeholder={placeholder}
        p="1.5rem" 
        focusBorderColor="pink.500"
        color={useColorModeValue("white.100", "gray.300")}
        borderColor={useColorModeValue("gray.400", "gray.100")}
        transition="0.4s"
        _hover={{ borderColor: "pink.500"}}
        _placeholder={{ color:useColorModeValue('gray.300', "gray.100")}}
        {...props}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}