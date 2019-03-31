import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  render() {
    const { handleLogin, createNewUser, themeNumber } = this.props
    return (
      <React.Fragment>
        <div>
          <div>
            <h2>
              <div>Log-in to your account</div>
            </h2>
            <form onSubmit={handleLogin}>
              <div>
                <div>
                  <div>
                    <input type="text" name="username" placeholder="Username" />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <button>Login</button>
              </div>

              <div />
            </form>

            <div>
              New to us?
              <Link to={`/new_user`}>
                <div onClick={createNewUser}>Sign Up</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm
