import { 
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, 
} from '@chakra-ui/react';

import { NavLink } from './NavLink';

import { useSidebarDrawer } from '../../context/SidebarDrowerContent';
import { ButtonContacts } from '../ButtonContacts';

export function Drawer() {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <DrawerChakra isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerOverlay />
      <DrawerContent bg="gray.800" p="4">
        <DrawerCloseButton />
        <DrawerHeader>Navegação</DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" alignItems="flex-start">
          <NavLink title='Início' href="/"/>
          <NavLink title='Projetos' href="/projects"/>
          <ButtonContacts />
        </DrawerBody>
      </DrawerContent>
    </DrawerChakra>
  );
}