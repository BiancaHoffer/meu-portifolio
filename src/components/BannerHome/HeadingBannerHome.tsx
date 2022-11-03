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
      direction="column"
      justify="center"
      align="center"
      paddingX="52px"
      paddingY="440px" 
      color="white.100"
      data-aos="fade-down"
      sx={{
        '@media (max-width: 1600px)': { 
          paddingY: '300px',
          height: '148px'
        }, 
        '@media (max-width: 820px)': {
          paddingY: '400px',
          height: '152px'
        }, 
        '@media (max-width: 480px)': {
          paddingY: '300px',
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