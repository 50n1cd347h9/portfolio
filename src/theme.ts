import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#10151c',
        color: 'white'
      },
      html: {
       height: '100%'
     }
    }
  }
});

