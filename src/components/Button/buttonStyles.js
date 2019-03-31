import { lighten, darken } from '../../utils/color'
import { colorPalletes } from '../../constants'

export const primaryButton = themeNumber => {
  return {
    borderColor: colorPalletes[themeNumber].primaryColor,
    backgroundColor: colorPalletes[themeNumber].primaryColor,
    color: colorPalletes[themeNumber].quinaryColor,
    ':hover': {
      backgroundColor: lighten(colorPalletes[themeNumber].primaryColor, 0.3),
      borderColor: lighten(colorPalletes[themeNumber].primaryColor, 0.3)
    },

    ':focus': {
      backgroundColor: darken(colorPalletes[themeNumber].primaryColor, 0.1),
      borderColor: darken(colorPalletes[themeNumber].primaryColor, 0.1)
    },

    ':active': {
      backgroundColor: darken(colorPalletes[themeNumber].primaryColor, 0.2),
      borderColor: darken(colorPalletes[themeNumber].primaryColor, 0.2)
    }
  }
}

export const secondaryButton = themeNumber => {
  return {
    borderColor: colorPalletes[themeNumber].secondaryColor,
    backgroundColor: colorPalletes[themeNumber].secondaryColor,
    color: colorPalletes[themeNumber].quinaryColor,
    ':hover': {
      backgroundColor: lighten(colorPalletes[themeNumber].secondaryColor, 0.3),
      borderColor: lighten(colorPalletes[themeNumber].secondaryColor, 0.3)
    },

    ':focus': {
      backgroundColor: darken(colorPalletes[themeNumber].secondaryColor, 0.1),
      borderColor: darken(colorPalletes[themeNumber].secondaryColor, 0.1)
    },

    ':active': {
      backgroundColor: darken(colorPalletes[themeNumber].secondaryColor, 0.2),
      borderColor: darken(colorPalletes[themeNumber].secondaryColor, 0.2)
    }
  }
}

export const tertiaryButton = themeNumber => {
  return {
    borderColor: colorPalletes[themeNumber].tertiaryColor,
    backgroundColor: colorPalletes[themeNumber].tertiaryColor,
    color: colorPalletes[themeNumber].quinaryColor,
    ':hover': {
      backgroundColor: lighten(colorPalletes[themeNumber].tertiaryColor, 0.3),
      borderColor: lighten(colorPalletes[themeNumber].tertiaryColor, 0.3)
    },

    ':focus': {
      backgroundColor: darken(colorPalletes[themeNumber].tertiaryColor, 0.1),
      borderColor: darken(colorPalletes[themeNumber].tertiaryColor, 0.1)
    },

    ':active': {
      backgroundColor: darken(colorPalletes[themeNumber].tertiaryColor, 0.2),
      borderColor: darken(colorPalletes[themeNumber].tertiaryColor, 0.2)
    }
  }
}
