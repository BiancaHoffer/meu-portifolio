import { Flex, useBreakpointValue } from '@chakra-ui/react';

export function BannerProject() {
  const isMediumAndSmallVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      {!isMediumAndSmallVersion && (
        <Flex
          bgImage="/images/spacetraveling.png"
          bgRepeat="no-repeat"
          bgColor="gray.400"
          bgPos="center top"
          objectFit="cover"
          w="100%"
          h="600px"
          opacity="0.6"
        />
      )}
    </>
  );
}