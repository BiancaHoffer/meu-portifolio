import { Text, Heading, Flex, Grid, VStack, useColorModeValue} from '@chakra-ui/react'
import { AboutMeText } from './AboutMeText';
import { Memoji } from './Memoji';

export function AboutMe() {
  return (
    <VStack
        w="100%"
        maxWidth="1140px"
        marginX="0 auto"
        paddingY={["80px", "140px", "200px", "200px"]}
        px="52px"
        borderBottom="1px"
        borderColor={useColorModeValue("gray.400", "gray.100")}
        bgColor={useColorModeValue("gray.800", "white.100")}
        data-aos="fade-up"
      >   
        <Grid 
          alignItems="center" 
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={8}
        >
          <AboutMeText />
          <Memoji />
        </Grid>
      </VStack>
  );
}