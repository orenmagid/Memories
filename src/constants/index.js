export const baseUrl = 'http://localhost:3000/api/v1'

export const colors = {
  1: {
    slateGrey: '#747C92',
    outerSpace: '#424c55',
    moonstoneBlue: '#75ABBC',
    isabelline: '#F5EDF0',
    floralWhite: '#FFF8F0'
  },
  2: {
    midnightGreen: '#114B5F',
    lavenderGrey: '#C6B9CD',
    languidLavender: '#C9CAD9',
    rosyBrown: '#CC978E',
    floralWhite: '#FFF8F0'
  },
  3: {
    peach: 'rgba(247, 197, 159, 1)',
    moccasin: 'rgba(252, 234, 222, 1)',
    tiffannyBlue: 'rgba(0, 182, 188, 1)',
    tropicalRainForest: 'rgba(0, 99, 93, 1)',
    babyPowder: 'rgba(253, 255, 252, 1)'
  }
}

export const colorPalletes = {
  1: {
    primaryColor: colors[1].outerSpace,
    secondaryColor: colors[1].slateGrey,
    tertiaryColor: colors[1].moonstoneBlue,
    quaternaryColor: colors[1].isabelline,
    quinaryColor: colors[1].floralWhite
  },
  2: {
    primaryColor: colors[2].midnightGreen,
    secondaryColor: colors[2].rosyBrown,
    tertiaryColor: colors[2].lavenderGrey,
    quaternaryColor: colors[2].languidLavender,
    quinaryColor: colors[2].floralWhite
  },
  3: {
    primaryColor: colors[3].tropicalRainForest,
    secondaryColor: colors[3].moccasin,
    tertiaryColor: colors[3].peach,
    quaternaryColor: colors[3].tiffannyBlue,
    quinaryColor: colors[3].babyPowder
  }
}

export const themeColors = {
  primaryColor: colorPalletes[3].primaryColor,
  secondaryColor: colorPalletes[3].secondaryColor,
  tertiaryColor: colorPalletes[3].tertiaryColor,
  quaternaryColor: colorPalletes[3].quaternaryColor,
  quinaryColor: colorPalletes[3].quinaryColor,
  textColor: 'rgb(0, 0, 0, .87)'
}

export const screenSizes = {
  screenSm: 320,
  screenMd: 720,
  screenLg: 1266
}

export const transitions = {
  standardTiming: '0.225s',
  standardCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
}
