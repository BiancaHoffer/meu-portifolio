import Link from 'next/link';

import {
  Button,
  Link as LinkChakra, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,

} from '@chakra-ui/react';

import { AiFillCaretDown, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { LinkContact } from './LinkContact';

export function PopoverContact() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant='solid' colorScheme='transparent' padding="4px">
          Contato
          <AiFillCaretDown color='#DB2090'style={{paddingLeft:"2px", paddingTop:"4px"}}/>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent width="200px" bgColor="gray.400" border="none">
        <PopoverBody display="flex" flexDir="column">
          <LinkContact 
            name='GitHub' 
            href={process.env.NEXT_PUBLIC_LINK_FOR_GITHUB} 
            icon={ AiFillGithub } 
          />

          <LinkContact 
            name='Linkedin' 
            href={process.env.NEXT_PUBLIC_LINK_FOR_LINKEDIN}
            icon={ AiFillLinkedin } 
          />

          <LinkContact 
            name='WhatsApp' 
            href={process.env.NEXT_PUBLIC_LINK_FOR_WHATSAPP}
            icon={ AiOutlineWhatsApp } 
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}