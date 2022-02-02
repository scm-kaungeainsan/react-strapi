import React, { useState, Fragment, useEffect } from 'react'
import LoginForm from '../../forms/LoginForm'
import './login.css';

function Login() {
  const usersData = [
    { id: 1, name: 'MyaMya', username: 'Angel' },
    { id: 2, name: 'Apirl', username: 'Apirl1234' },
    { id: 3, name: 'Leo', username: 'LeoLeo' },
  ]
  const [users, setUsers] = useState(usersData)
  const addUser = (user: any) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  return (
    <div className="login-container">
      <div className="logo">
        <h1 className="header-logo">
        <span className="logo-k">K</span><span>aungEain</span></h1></div>
      <div className="flex-row">
        <Fragment>
          <div className="flex-large">
            {/* <h2>Add User</h2> */}
            <div className="service-form-cover">
              <LoginForm addUser={addUser} />
            </div>
          </div>
        </Fragment>
      </div>
    </div >
  );
}

export default Login;
