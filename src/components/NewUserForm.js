import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class NewUserForm extends Component {
  render() {
    let { handleCreateOrEditUser } = this.props

    let token = localStorage.getItem('token')
    if (token) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div>
          <form onSubmit={handleCreateOrEditUser}>
            <div>
              <input
                name="first_name"
                label="First Name"
                placeholder="First Name"
              />
              <input
                name="last_name"
                label="Last name"
                placeholder="Last name"
              />
            </div>
            <div>
              <input name="username" label="Username" placeholder="Username" />
              <input
                name="email"
                label="Email Address"
                placeholder="Email
                Address"
              />
            </div>
            <div>
              <input
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
