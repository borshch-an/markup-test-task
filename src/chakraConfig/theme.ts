import { extendTheme } from "@chakra-ui/react";
import tokens from "./tokens";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },

    // Global styles
    styles: {
        global: {
            html: {
                fontSize: "16px", // 1rem = 16px
            },
            body: {
                fontFamily: tokens.fontFamily.roboto,
                fontSize: tokens.fontSize.md,
                fontWeight: tokens.fontWeight.regular,
                color: tokens.colors.black,
                bg: tokens.colors.gray[50],
            },
        },
    },

    // Fonts
    fonts: {
        body: tokens.fontFamily.roboto,
        heading: tokens.fontFamily.montserrat,
        mono: "Menlo, monospace",
    },

    // Font sizes
    fontSizes: tokens.fontSize,

    // Font weights
    fontWeights: tokens.fontWeight,

    // Sizes
    sizes: {
        ...tokens.sizes,
    },

    // Spacing
    space: tokens.spacing,

    // Border radius
    radii: tokens.borderRadius,

    // Colors
    colors: tokens.colors,

    // Component styles
    components: {
        Text: {
            baseStyle: {
                fontFamily: tokens.fontFamily.roboto,
            },
        },
        Button: {
            baseStyle: {
                fontFamily: tokens.fontFamily.roboto,
                fontWeight: tokens.fontWeight.medium,
                fontSize: tokens.fontSize.sm,
            },
            variants: {
                outline: {
                    borderWidth: "1px",
                    borderColor: tokens.colors.gray[400],
                    color: tokens.colors.gray[400],
                    _hover: {
                        bg: "transparent",
                    },
                },
            },
        },
        Input: {
            baseStyle: {
                fontFamily: tokens.fontFamily.roboto,
                fontSize: tokens.fontSize.sm,
            },
        },
        Box: {
            baseStyle: {
                fontFamily: tokens.fontFamily.roboto,
            },
        },
    },
});

export default theme;
