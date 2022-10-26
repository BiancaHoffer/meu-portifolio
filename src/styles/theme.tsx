import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white: {
            "100": "#F8F8F8"
        },
        pink: {
           "500": "rgb(219, 32, 144)"
        },
        gray: {
            "300": "#585656",
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