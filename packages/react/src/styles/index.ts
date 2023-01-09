import {createStitches, defaultThemeMap} from '@stitches/react';
import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  fonts,
} from '@rmuikit/tokens'
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
    fonts,
  },
})

