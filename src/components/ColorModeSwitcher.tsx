import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
  } from "@chakra-ui/react";

  import { FaMoon, FaSun } from "react-icons/fa";
  
  type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">
  
  export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  
    return (
      <IconButton
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        w="fit-content"
        marginLeft="2"
        fontSize="lg"
        size="md"
        variant="ghost"
        color={useColorModeValue("gray.300", "gray.200")}
        colorScheme='transparent'
        transition="0.4s"
        _hover={{ 
          color: useColorModeValue("white.100", "gray.100") 
        }}
        {...props}
      />
    )
  }