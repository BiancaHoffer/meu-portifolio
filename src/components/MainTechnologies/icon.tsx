import { Heading, Image, GridItem, ChakraProps } from '@chakra-ui/react'

interface IconProps extends ChakraProps {
  src: string;
  title: string;
}

export function Icon({ src, title, ...rest }: IconProps) {
  return (
  <>
    <GridItem 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
      {...rest}
    >
      <Image 
        src={src} 
        w="80px"
        h="80px" 
        marginBottom="24px"
      />
      <Heading fontSize="16px">
        {title}
      </Heading>
    </GridItem>
  </>
  );
}