import { 
  Flex, 
  Grid, 
  useBreakpointValue, 
  IconButton, 
  Icon, 
} from '@chakra-ui/react';

import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '../../context/SidebarDrowerContent';
import { ButtonContacts } from '../ButtonContacts';

import { Drawer } from './Drawer';
import { NavLink } from './NavLink';

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isMediumAndSmallVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isMediumAndSmallVersion) {
    return (
      <Flex
        as='header'
        w="100%"
        borderBottom="1px"
        borderColor="gray.400"
      >
        <Flex 
          h="100px"
          w="100%"
          maxWidth="1140px"
          margin="0 auto"
          px="52px"
          justify="end"
          align="center"
        >
          <IconButton
            aria-label='Open navigation'
            w="40px"
            h="40px"
            bgColor="gray.400"
            icon={<Icon as={RiMenuLine} w="20px" h="20px" color="white.100"/>}
            onClick={onOpen}
          />
          <Drawer />
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex
      as='header'
      margin="0 auto"
      borderBottom="1px"
      borderBottomColor="gray.400"
    >
      <Grid
        as='header'
        w="100%"
        maxWidth="1140px"
        h="100px"
        margin="0 auto"
        px="52px"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
      >
        <Flex as='span'/>
        <Flex justify='space-between' align="center">
          <NavLink title='Início' href="/"/>
          <NavLink title='Projetos' href="/projects"/>
          <ButtonContacts />
        </Flex>
      </Grid>
    </Flex>
  );
}