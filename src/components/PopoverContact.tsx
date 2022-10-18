import Image from 'next/image';

import {
  Button,
  Box,
  Link as LinkChakra, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,

} from '@chakra-ui/react';
import Link from 'next/link';

export function PopoverContact() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant='ghost' colorScheme='transparent' padding="4px">
          Contato
          <Box paddingLeft="2px" paddingTop="4px">
            <Image src="/images/down.svg" width="12px" height="12px" />
          </Box>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent>
        <PopoverBody>
          <Link href="#" passHref>
            <LinkChakra variant='with-shadow' isExternal>
              Linkedin
            </LinkChakra>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}