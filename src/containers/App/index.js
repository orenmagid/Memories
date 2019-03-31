import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../../components/Navbar'
import LoginForm from '../../components/LoginForm'
import NewUserForm from '../../components/NewUserForm'
import Main from '../Main'
import { baseUrl } from '../../constants'
import { styled } from 'styletron-react'
import styles from './styles.js'

const MainContainer = styled('div', styles.main)
const Content = styled('div', styles.content)

class App extends Component {
  state = { error: '', themeNumber: 3 }

  handleCreateUser = e => {
    e.preventDefault()

    let data = {
      user: {
        first_name: e.currentTarget.first_name.value,
        last_name: e.currentTarget.last_name.value,
        username: e.currentTarget.username.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value
      }
    }

    fetch(baseUrl + '/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(newUser => {
        if (newUser.errors) {
          this.displayErrors(newUser.errors)
        } else {
          if (newUser.success) {
            localStorage.setItem('token', newUser.token)

            this.setState({
              error: ''
            })
          }
          window.history.back()
        }
      })
  }

  displayErrors = errors => {
    let errorlist = errors.map(error => {
      return `-${error} \n`
    })
    alert(errorlist.join(' '))
  }

  handleLogin = e => {
    e.preventDefault()
    const params = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }

    this.setState({ error: '' })

    fetch(baseUrl + '/login', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('TCL: App -> data', data)
        if (data.success) {
          localStorage.setItem('token', data.token)

          this.setState({ error: '' })
        } else {
          this.setState({ error: 'Invalid username or password' })
          alert('Invalid username or password')
        }
      })
  }

  handleLogout = () => {
    localStorage.clear()
  }

  handleSelectTheme = selectedThemeNumber => {
    this.setState({ themeNumber: selectedThemeNumber })
  }

  render() {
    const { themeNumber } = this.state
    // if (
    //   localStorage.getItem('token') &&
    //   window.location.href.includes('login')
    // ) {
    //   return <Redirect to="/" />
    // }
    return (
      <MainContainer>
        <NavBar
          themeNumber={themeNumber}
          handleSelectTheme={this.handleSelectTheme}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />

        <Content>
          <Route
            exact
            path="/new_user"
            render={routerProps => (
              <NewUserForm
                themeNumber={themeNumber}
                handleCreateOrEditUser={this.handleCreateUser}
                displayNewUserForm={this.state.displayNewUserForm}
              />
            )}
          />
          {localStorage.getItem('token') ? null : (
            <Route
              path="/login"
              render={routerProps => (
                <LoginForm
                  themeNumber={themeNumber}
                  createNewUser={this.createNewUser}
                  handleLogin={this.handleLogin}
                />
              )}
            />
          )}
          {localStorage.getItem('token') ? (
            <Route
              path="/"
              render={routerProps => <Main themeNumber={themeNumber} />}
            />
          ) : null}
        </Content>
      </MainContainer>
    )
  }
}

export default App
