import { Text, Heading, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { AboutMeText } from './AboutMeText';
import { Memoji } from './Memoji';

export function AboutMe() {
  return (
    <Grid 
      alignItems="center" 
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={8}
    >
      <AboutMeText />
      <Memoji />
    </Grid>
  );
}