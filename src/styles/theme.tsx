import { extendTheme, useColorModeValue, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

export const theme = extendTheme({
    colors: {
        white: {
            "100": "#f1eeee"
        },
        pink: {
           "500": "#db2090"
        },
        gray: {
            "100": "#a1a0a0",
            "200": "#8a8888",
            "300": "#585656",
            "350": "#3a3939",
            "400": "#282727",
            "700": "#141414",
            "800": "#111111",
    
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.50'
            },
        },
        a: {
            _hover: {
                textDecoration: "none",
            }
            
        }
    }
})