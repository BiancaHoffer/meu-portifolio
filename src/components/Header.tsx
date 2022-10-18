import Link from 'next/link';
import { 
  Flex, 
  Link as LinkChakra, 
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,

} from '@chakra-ui/react';
import { PopoverContact } from './PopoverContact';


export function Header() {
  return (
    <Flex 
      borderBottom="1px" 
      borderColor="gray.400"
      height="100px"
      w="100%"
    >
      <Flex
        width="400px"
        margin="0 auto"
        paddingX="52px"
        justify="space-between"
        align="center"
      >
        <Link href="/" passHref>
          <LinkChakra fontWeight="bold" padding="4px">
            Início
          </LinkChakra>
        </Link>

        <Link href="#" passHref>
          <LinkChakra fontWeight="bold" padding="4px" >
            Projetos
          </LinkChakra>
        </Link>

        <PopoverContact />
        
      </Flex>
    </Flex>
  );
}