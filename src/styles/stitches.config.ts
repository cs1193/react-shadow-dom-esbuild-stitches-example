import { createStitches } from '@stitches/react';

import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

/* Monochromatic Color Scheme for Main App */
export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gunmetal: '#272D37',
      charcoal: '#36414C',
      auroMetalSaurus: '#65737F',
      manatee: '#8E9CA9',
      gainsboro: '#D4DDE5',
      cultured: '#F5F6F7'
    },
    fonts: {
      sans: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
      mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace`
    },
    space: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px'
    },
    fontSizes: {
      large: '48px'
    }
  }
});

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    outline: '0',
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '$sans',
    backgroundColor: '$cultured',
    color: '$gunmetal'
  },
  "code, kbd, samp, pre": {
    fontFamily: "$mono"
  }
});
