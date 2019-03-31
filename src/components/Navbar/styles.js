import { screenSizes, colorPalletes } from '../../constants'

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
  }
}

export default styles
