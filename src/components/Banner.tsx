import { Flex } from '@chakra-ui/react'
import styles from '../styles/banner.module.scss';

export function Banner() {
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
        <source src="/videos/galaxy.mp4" />
      </video>
    </Flex>
  );
}