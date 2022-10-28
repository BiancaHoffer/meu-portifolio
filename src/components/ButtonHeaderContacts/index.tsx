import {
  Button,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useColorModeValue,

} from '@chakra-ui/react';

import { AiFillCaretDown, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

import { LinkContact } from './LinkContact';

export function ButtonHeaderContacts() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button 
          variant='solid' 
          colorScheme='transparent' 
          p="4px"
          fontSize={["1rem", "1.2rem"]}
          color={useColorModeValue("gray.300", "gray.200")}
          transition="0.4s"
          _hover={{ color:useColorModeValue('white.100', "gray.100") }}
        >
          Contato
          <Icon 
            as={AiFillCaretDown} 
            color='#DB2090' 
            paddingLeft="2px" 
          />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent boxShadow='xl' width="200px" bgColor={useColorModeValue("gray.400", "gray.300")} border="none">
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