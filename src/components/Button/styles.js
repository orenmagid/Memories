import { lighten, darken } from '../../utils/color'
import { transitions } from '../../constants'
import { colorPalletes } from '../../constants'

const styles = {
  button: {
    display: 'inline-block',
    fontSize: '1rem',
    position: 'relative',
    textAlign: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    touchAction: 'manipulation',
    userSelect: 'none',
    outline: '0',
    padding: '0.25rem 1.25rem',
    transition: `all ${transitions.standardTiming} ${transitions.standardCubic}`
  },
  primaryButton: ({ $themeNumber }) => {
    return {
      borderColor: colorPalletes[$themeNumber].primaryColor,
      backgroundColor: colorPalletes[$themeNumber].primaryColor,
      color: colorPalletes[$themeNumber].quinaryColor,
      ':hover': {
        backgroundColor: lighten(colorPalletes[$themeNumber].primaryColor, 0.3),
        borderColor: lighten(colorPalletes[$themeNumber].primaryColor, 0.3)
      },

      ':focus': {
        backgroundColor: darken(colorPalletes[$themeNumber].primaryColor, 0.1),
        borderColor: darken(colorPalletes[$themeNumber].primaryColor, 0.1)
      },

      ':active': {
        backgroundColor: darken(colorPalletes[$themeNumber].primaryColor, 0.2),
        borderColor: darken(colorPalletes[$themeNumber].primaryColor, 0.2)
      }
    }
  },
  secondaryButton: ({ $themeNumber }) => {
    return {
      borderColor: colorPalletes[$themeNumber].secondaryColor,
      backgroundColor: colorPalletes[$themeNumber].secondaryColor,
      color: colorPalletes[$themeNumber].quinaryColor,
      ':hover': {
        backgroundColor: lighten(
          colorPalletes[$themeNumber].secondaryColor,
          0.3
        ),
        borderColor: lighten(colorPalletes[$themeNumber].secondaryColor, 0.3)
      },

      ':focus': {
        backgroundColor: darken(
          colorPalletes[$themeNumber].secondaryColor,
          0.1
        ),
        borderColor: darken(colorPalletes[$themeNumber].secondaryColor, 0.1)
      },

      ':active': {
        backgroundColor: darken(
          colorPalletes[$themeNumber].secondaryColor,
          0.2
        ),
        borderColor: darken(colorPalletes[$themeNumber].secondaryColor, 0.2)
      }
    }
  }
}

export default styles
