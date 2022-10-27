import { Flex, HStack, VStack, Heading as HeadingChakra, Grid } from "@chakra-ui/react";

import { Heading } from "../Heading";
import { Text } from "../Text";
import { BannerProject } from "./BannerProject";
import { IconRedirect } from "./IconRedirect";
import { IconTechnologies } from "./IconTechnologies";

interface ProjectProps {
  data: {
    uid: string;
    name: string;
    image: string;
    text: string;
    redirect: {
      link: string;
      icon: string;
    }[];
    technology: {
      icon: {
        url: string;
        field: string;
      }
    }[];
  }
}

export function GeneralProjectInfos({ data }: ProjectProps) {
  return (
    <>
      <BannerProject src={data.image} />

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
                title={data.name}
                marginBottom={["40px", "80px", "100px", "100px"]}
              />
            </Flex>

            <Text text={data.text} />

            <HStack 
              paddingTop={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
              gap={["0", "4"]} 
              >
                {data.redirect.map(icon => {
                  return (
                      <IconRedirect 
                        key={icon.link}
                        href={icon.link} 
                        icon={icon.icon} 
                      />
                  )
                })}
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
            
            <Grid 
              templateColumns={["repeat(4, 1fr)", "repeat(7, 1fr)", "repeat(10, 1fr)"]} 
              gap={["0", "4"]}
            >
              {data.technology.map(icon => {
                return (
                  <IconTechnologies 
                    key={icon.icon.url}
                    icon={icon.icon.url} 
                    label={icon.icon.field}
                  />
                )
              })}
            </Grid>
          </VStack>
        </Flex>

    </>
  );
}