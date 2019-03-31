import { screenSizes, colorPalletes } from '../../constants'
import { lighten, darken } from '../../utils/color'
import { transitions } from '../../constants'

const styles = {
  navbar: ({ $themeNumber }) => {
    return {
      position: 'fixed',
      height: '4rem',
      width: '100%',
      backgroundColor: colorPalletes[$themeNumber].primaryColor,
      zIndex: 1001,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  navbarContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem'
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
