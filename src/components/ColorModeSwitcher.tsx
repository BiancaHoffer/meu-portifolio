import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
  } from "@chakra-ui/react"
  import { FaMoon, FaSun } from "react-icons/fa"
  
  type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">
  
  export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  
    return (
      <IconButton
        size="md"
        w="fit-content"
        fontSize="lg"
        variant="ghost"
        color={useColorModeValue("gray.300", "gray.200")}
        colorScheme='transparent'
        marginLeft="2"
        transition="0.4s"
        _hover={{ color: useColorModeValue("white.100", "gray.100") }}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    )
  }