import Link from "next/link";
import { Flex, Icon, Link as LinkChakra, useColorModeValue} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineArrowUp } from 'react-icons/ai'
import { ButtonPink } from '../ButtonPink';

export function BackToTopButton() {
    const { asPath } = useRouter();
 
    return (
    <Flex position="fixed" bottom="40px" right="40px">
        <Link href={asPath}>
            <LinkChakra _hover={{ textDecoration: "none" }}>
                <ButtonPink>
                    <Icon 
                        as={AiOutlineArrowUp}
                        w={[4, 8]} 
                        h={[4, 8]} 
                        color={useColorModeValue("white.100", "white.100")}  
                    />
                </ButtonPink>
            </LinkChakra>
        </Link>
    </Flex>
  );
}
