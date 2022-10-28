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
          bgColor="pink.500"
          w="100%"
          h={["600px", "700px"]}
          opacity="0.6"
          justify="center"
          transition="0.4s"
          _hover={{ opacity: "0.9" }}
        >
          <Image src={src} alt="imagem projeto" objectFit="contain" />
        </Flex>
      )}
    </>
  );
}