import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../constants'

const NavBar = ({
  createNewUser,
  displayNewUserForm,
  handleLogin,
  handleLogout
}) => (
  <div>
    <div
      style={{
        padding: '.5rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors[1].slateGrey
      }}
    >
      <div className="colum">
        <Link
          to={`/`}
          style={{ color: colors[1].honeyDew, textDecoration: 'none' }}
        >
          <h1>ImageIn</h1>
        </Link>
      </div>
      {!localStorage.token && !window.location.href.includes('login') ? (
        <div className="colum">
          <Link to={`/login`}>
            <button
              style={{
                color: colors[1].outerSpace,
                backgroundColor: colors[1].honeyDew,
                height: '1.25rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '0.25rem',
                fontWeight: '300',
                textAlign: 'center',
                userSelect: 'none',
                outline: '0'
              }}
            >
              Login
            </button>
          </Link>
        </div>
      ) : null}

      {localStorage.token ? (
        <div className="colum">
          <Link to={`/`}>
            <button
              style={{
                color: colors[1].outerSpace,
                backgroundColor: colors[1].honeyDew,
                height: '1.25rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '0.25rem',
                fontWeight: '300',
                textAlign: 'center',
                userSelect: 'none',
                outline: '0'
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  </div>
)

export default NavBar
