import { 
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue, 
} from '@chakra-ui/react';

import { NavLink } from './NavLink';

import { useSidebarDrawer } from '../../context/SidebarDrowerContent';
import { ButtonHeaderContacts } from '../ButtonHeaderContacts';

export function Drawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <DrawerChakra isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerOverlay />
      <DrawerContent bgColor={useColorModeValue("gray.800", "white.100")} p="4">
        <DrawerCloseButton p="2rem"color={useColorModeValue("gray.300", "gray.200")} />
        <DrawerHeader 
          borderBottom="1px"
          py="2rem" color={useColorModeValue("gray.300", "gray.200")} 
          borderColor={useColorModeValue("gray.400", "gray.100")}
        >
          Navegação
        </DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" alignItems="flex-start">
          <NavLink title='Início' href="/" my="1rem" />
          <NavLink title='Projetos' href="/projects" mb="1rem" />
          <ButtonHeaderContacts />
        </DrawerBody>
      </DrawerContent>
    </DrawerChakra>
  );
}