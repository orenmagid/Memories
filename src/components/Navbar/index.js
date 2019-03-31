import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { colorPalletes } from '../../constants'
import SecondaryButton from '../Button/SecondaryButton'
import styles from './styles'
import { styled } from 'styletron-react'
import Dropdown from '../Dropdown'
import {
  primaryButton,
  secondaryButton,
  tertiaryButton
} from '../Button/buttonStyles'

const NavbarContainer = styled('div', styles.navbar)
const NavbarContent = styled('div', styles.navbarContent)

export default class Navbar extends PureComponent {
  render() {
    const { handleLogout, handleSelectTheme, themeNumber } = this.props
    return (
      <NavbarContainer $themeNumber={themeNumber}>
        <NavbarContent $themeNumber={themeNumber}>
          <div style={{ alignSelf: 'center' }}>
            <Link
              to={`/`}
              style={{
                color: colorPalletes[themeNumber].quinaryColor,
                textDecoration: 'none'
              }}
            >
              <h1>ImageIn</h1>
            </Link>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Dropdown
              Component={
                <div style={{ color: colorPalletes[themeNumber].quinaryColor }}>
                  Theme {themeNumber}
                </div>
              }
            >
              <Dropdown.Item onClick={() => handleSelectTheme(1)}>
                Theme 1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelectTheme(2)}>
                Theme 2
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelectTheme(3)}>
                Theme 3
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div style={{ alignSelf: 'center' }}>
            {!localStorage.token && !window.location.href.includes('login') ? (
              <Link to={`/login`}>
                <SecondaryButton
                  style={secondaryButton(themeNumber)}
                  themeNumber={themeNumber}
                >
                  Login
                </SecondaryButton>
              </Link>
            ) : null}

            {localStorage.token ? (
              <Link to={`/`}>
                <SecondaryButton
                  style={secondaryButton(themeNumber)}
                  themeNumber={themeNumber}
                  onClick={handleLogout}
                >
                  Logout
                </SecondaryButton>
              </Link>
            ) : null}
          </div>
        </NavbarContent>
      </NavbarContainer>
    )
  }
}
