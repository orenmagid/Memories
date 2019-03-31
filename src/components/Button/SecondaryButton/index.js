import React, { PureComponent } from 'react'
import styles from '../styles'
import { styled } from 'styletron-react'

const SecondaryButton = styled('button', {
  ...styles.button,
  ...styles.secondaryButton
})

export default class Button extends PureComponent {
  render() {
    const { onClick, type, style, children, themeNumber, ...rest } = this.props
    console.log('TCL: Button -> render -> themeNumber', themeNumber)
    return (
      <SecondaryButton
        $themeNumber={themeNumber}
        onClick={onClick}
        type={type}
        style={style}
        {...rest}
      >
        {children}
      </SecondaryButton>
    )
  }
}
