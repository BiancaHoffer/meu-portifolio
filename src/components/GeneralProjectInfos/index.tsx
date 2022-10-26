import { Flex, HStack, VStack, Heading as HeadingChakra } from "@chakra-ui/react";

import { Heading } from "../Heading";
import { Text } from "../Text";
import { BannerProject } from "./BannerProject";
import { IconRedirect } from "./IconRedirect";
import { IconTechnologies } from "./IconTechnologies";

export function GeneralProjectInfos() {
  return (
    <>
      <BannerProject />

      <Flex
          w="100%"
          maxW="1140px"
          margin="0 auto"
          px="52px"
          flexDir="column"
          paddingY={["80px", "140px", "200px", "200px"]}
        >
          <VStack w="100%" justify="center" align="start">
            <Flex flexDir="column">
              <Heading
                title="Spacetraveling" 
                marginBottom={["40px", "80px", "100px", "100px"]}
              />
            </Flex>

            <Text text="
              Spacetraveling é blog moderno sobre tecnologia. O projeto possui
              uma das principais ferramentas utilizadas atualmente,
              Next.js, um framework muito poderoso e funcional.
              " 
            />

            <HStack
                paddingTop={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
                gap={["0", "4"]} 
              >
                <IconRedirect  href="#" icon={"github"} />
                <IconRedirect  href="#" icon={"site"} />
            </HStack>
          </VStack>
          
          <VStack 
            w="100%" 
            justify="center" 
            align="start" 
            marginTop={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
          >
            <HeadingChakra
              fontSize={["1rem", "1.5rem", "2rem","2rem"]}
              mb={["1rem", "1.5rem", "2rem", "2rem"]}
              mt={["2rem", "3rem", "4rem", "4rem"]} 
            >
              Tecnologias utilizadas: 
            </HeadingChakra>
            
            <HStack gap={["0", "4"]}>
              <IconTechnologies icon={"tecnologia"} label="Next.js" />
              <IconTechnologies icon={"tecnologia"} label="Next.js" />
              <IconTechnologies icon={"tecnologia"} label="Next.js" />
            </HStack>
          </VStack>
        </Flex>

    </>
  );
}