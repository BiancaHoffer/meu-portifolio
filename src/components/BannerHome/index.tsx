import { Flex } from '@chakra-ui/react';

import styles from './banner.module.scss';
import { HeadingBannerHome } from './HeadingBannerHome';

interface Banner {
  result: {
    title: string;
    subtitle: string;
  }
}

interface HomeProps {
  data: {
    video: string;
    result: Banner;
  }
}

export function BannerHome({ data }: HomeProps) {
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

      <HeadingBannerHome result={data.result[0]} />
    </Flex>
  );
}