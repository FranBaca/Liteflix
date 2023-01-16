import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Bebas Neue', sans-serif`,
  },
  styles: {
    global: {
      '@media screen and (min-width: 768px)': {
        body: {
          overflow: 'hidden',
        },
      },
      body: {
        bg: '#000',
        margin: 0,
        color: 'white',
      },
    },
  },
});

export default theme;