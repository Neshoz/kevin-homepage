import {
  extendTheme,
  ThemeComponents,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const { colors: c } = chakraTheme;

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components: ThemeComponents = {
  Heading: {
    baseStyle: (props) => ({
      color: mode(c.blackAlpha["900"], c.whiteAlpha["900"])(props),
    }),
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Text: {
    baseStyle: (props) => ({
      color: mode(c.blackAlpha["900"], c.whiteAlpha["900"])(props),
    }),
  },
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const shadows = {
  teal: "0 5px 20px 2px rgba(56,161,105,0.16);",
};

const fonts = {
  heading: `'Lato', sans-serif;`,
  body: `'Lato', sans-serif;`,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  shadows,
  fonts,
});
export default theme;
