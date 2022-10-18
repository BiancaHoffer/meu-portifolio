import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        white: {
            "100": "#ffff"
        },
        pink: {
           "500": "#DB2090"
        },
        gray: {
            "50": "#F8F8F8",
            "400": "#282727",
            "800": "#141414",
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
            }
        }
    }
})