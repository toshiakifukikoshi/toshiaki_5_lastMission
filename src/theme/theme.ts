import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.w200",
        color: "red.800"
      }
    }
  }
});

export default theme;
