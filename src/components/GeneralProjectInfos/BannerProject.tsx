import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

interface BannerProjectProps {
  src: string;
}

export function BannerProject({ src }: BannerProjectProps) {
  const isMediumAndSmallVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      {!isMediumAndSmallVersion && (
        <Flex 
          w="100%"
          h={["500px", "500px"]}
          justify="center"
          opacity="0.6"
          bgColor="pink.500"
          transition="0.4s"
          _hover={{ opacity: "0.9" }}
        >
          <Image src={src} alt="imagem projeto" objectFit="contain" />
        </Flex>
      )}
    </>
  );
}