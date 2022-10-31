import { 
  Heading,
  GridItem, 
  ChakraProps, Icon as IconChakra, 
  useColorModeValue 
} from '@chakra-ui/react';

interface IconProps extends ChakraProps {
  icon: any;
  title: string;
}

export function Icon({ icon, title, ...rest }: IconProps) {
  return (
  <>
    <GridItem 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
      data-aos="zoom-in"
      {...rest}
    >
      <IconChakra 
        as={icon}  
        h={["80px", "80px", "100px", "100px"]} 
        w={["80px", "80px", "100px", "100px"]}
        color="pink.500"   
      />

      <Heading 
        marginTop="18px"
        fontSize="16px" 
        color={useColorModeValue("white.100", "gray.300")}>
        {title}
      </Heading>
    </GridItem>
  </>
  );
}
