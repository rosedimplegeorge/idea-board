import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users')
      .then(res => {
        console.log("Saving users to state", res.data)
        this.setState({ users: res.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    console.log("Users in state at LogIn Render", this.state.users)
    const userLinks = this.state.users.map((user, i) => {
      return (
        <div key={i}>
          <Link to={`/user/${user._id}`}>{user.userName}</Link>
        </div>)
    })

    return (
      <div>
        <div>
          <Link to='/'>Return Home</Link>
        </div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {userLinks}
      </div>
    )
  }
}

export default LogIn