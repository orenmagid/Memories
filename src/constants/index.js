export const baseUrl = 'http://localhost:3000/api/v1'

export const colors = {
  1: {
    slateGrey: '#747C92',
    charcoal: '#2E4057',
    cambridgeBlue: '#A4C3B2',
    columbiaBlue: '#F5EDF0',
    floralWhite: '#FFF8F0'
  },
  2: {
    midnightGreen: '#114B5F',
    rosyBrown: '#CC978E',
    wintergreenDream: '#5A7D7C',
    languidLavender: '#C9CAD9',
    floralWhite: '#FFF8F0'
  },
  3: {
    tropicalRainForest: 'rgba(0, 99, 93, 1)',
    moonstoneBlue: '#66B3BA',
    moccasin: 'rgba(252, 234, 222, 1)',
    peach: 'rgba(247, 197, 159, 1)',
    babyPowder: 'rgba(253, 255, 252, 1)'
  }
}

export const colorPalletes = {
  1: {
    primaryColor: colors[1].slateGrey,
    secondaryColor: colors[1].charcoal,
    tertiaryColor: colors[1].cambridgeBlue,
    quaternaryColor: colors[1].columbiaBlue,
    quinaryColor: colors[1].floralWhite,
    textColor: 'rgb(0, 0, 0, .87)'
  },
  2: {
    primaryColor: colors[2].midnightGreen,
    secondaryColor: colors[2].rosyBrown,
    tertiaryColor: colors[2].wintergreenDream,
    quaternaryColor: colors[2].languidLavender,
    quinaryColor: colors[2].floralWhite,
    textColor: 'rgb(0, 0, 0, .87)'
  },
  3: {
    primaryColor: colors[3].tropicalRainForest,
    secondaryColor: colors[3].moonstoneBlue,
    tertiaryColor: colors[3].moccasin,
    quaternaryColor: colors[3].peach,
    quinaryColor: colors[3].babyPowder,
    textColor: 'rgb(0, 0, 0, .87)'
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
