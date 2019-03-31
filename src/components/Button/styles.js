import { transitions } from '../../constants'

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
  }
}

export default styles
