import { 
  Flex, 
  Grid, 
  useBreakpointValue, 
  IconButton, 
  Icon,
  useColorModeValue, 
} from '@chakra-ui/react';

import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '../../context/SidebarDrowerContent';
import { ButtonHeaderContacts } from '../ButtonHeaderContacts';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

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
        bgColor={useColorModeValue("gray.700", "white.100")}
        align="center"
        px="52px"
      >
        <ColorModeSwitcher />
        <Flex 
          h="100px"
          w="100%"
          maxWidth="1140px"
          margin="0 auto"
          justify="end"
          align="center"
        >
          <IconButton
            aria-label='Open navigation'
            w="1.5rem"
            h="1.5rem"
            colorScheme="gray.400"
            _focus={{ background:"transparent" }}
            icon={<Icon as={RiMenuLine} w="1.2rem" h="1.2rem" color="white.100" />}
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
      borderBottomColor={useColorModeValue("gray.400", "gray.100")}
      bgColor={useColorModeValue("gray.700", "white.100")}
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
        <ColorModeSwitcher />
        <Flex justify='space-between' align="center">
          <NavLink title='Início' href="/" />
          <NavLink title='Projetos' href="/projects" />
          <ButtonHeaderContacts />
        </Flex>
      </Grid>
    </Flex>
  );
}