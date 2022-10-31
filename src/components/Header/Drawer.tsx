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
        <DrawerCloseButton />
        <DrawerHeader color={useColorModeValue("gray.300", "gray.200")}>
          Navegação
        </DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" alignItems="flex-start">
          <NavLink title='Início' href="/" />
          <NavLink title='Projetos' href="/projects" />
          <ButtonHeaderContacts />
        </DrawerBody>
      </DrawerContent>
    </DrawerChakra>
  );
}