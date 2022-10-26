import { Flex } from '@chakra-ui/react';
import styles from './banner.module.scss';
import { Heading } from './Heading';

interface BannerProps {
  data: {
    video: string;
    result: {
      title: string;
      subtitle: string; 
    };
  };
}

export function Banner({ data }: BannerProps) {
  return (
    <Flex
      w="100%"
      m="0"
      p="0"
      overflow="hidden"
      justify="center"
      align="center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.container}
      >
        <source src={data.video} />
      </video>

      <Heading result={data.result[0]} />
    </Flex>
  );
}