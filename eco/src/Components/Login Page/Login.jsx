import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <input type="email" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <button>Login</button>
    </div>
  )
}

export default Login