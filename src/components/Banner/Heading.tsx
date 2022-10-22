import { Flex, Heading as H1, Text } from '@chakra-ui/react'
import { ButtonBanner } from './ButtonBanner';

export function Heading() {
  return (
    <Flex 
      position="relative"
      h="132px"
      zIndex="2"
      color="white.100"
      direction="column"
      justify="center"
      align="center"
      paddingX="52px"
      paddingY="440px" 
      data-aos="fade-up"
      sx={{
        '@media (max-width: 1600px)': { 
          paddingY: '320px',
          height: '148px'
        }, 
        '@media (max-width: 700px)': {
          paddingY: '200px',
          height: '152px'
        }, 
        '@media (max-width: 400px)': {
          paddingY: '160px',
          height: '108px'
      }, 
    }}
  >
    <Text 
      fontSize={["16px", "18px", "26px","32px"]}
      fontWeight="500"
      textAlign="center"
      marginBottom={["4px", "6px"]}
    >
      Olá, meu nome é Bianca 👋
    </Text>
    <H1
      fontSize={["34px", "42px", "60px", "72px"]} 
      fontWeight="500"
      textAlign="center"
    >
      Sou desenvolvedora front-end
    </H1>

    <ButtonBanner />
  </Flex>
  );
}