import { Heading, Image, GridItem, ChakraProps, Icon as IconChakra } from '@chakra-ui/react'


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
        color="pink.500" 
        h={["80px", "80px", "100px", "100px"]} 
        w={["80px", "80px", "100px", "100px"]}  
      />

      <Heading fontSize="16px" marginTop="18px">
        {title}
      </Heading>
    </GridItem>
  </>
  );
}
