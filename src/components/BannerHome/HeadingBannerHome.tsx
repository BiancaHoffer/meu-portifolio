import { Flex, Heading as H1, Text } from '@chakra-ui/react'
import { ButtonBannerHome } from './ButtonBannerHome';

interface ResultProps {
  result: {
    title: string;
    subtitle: string; 
  }
}

export function HeadingBannerHome({ result }: ResultProps) {
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
      {result.title}
    </Text>
    <H1
      fontSize={["34px", "42px", "60px", "72px"]} 
      fontWeight="500"
      textAlign="center"
    >
      {result.subtitle}
    </H1>

    <ButtonBannerHome />
  </Flex>
  );
}