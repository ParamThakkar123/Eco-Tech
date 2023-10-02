import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1 className=''>Signup</h1>
        <input type="text" name='name' placeholder='Your Name'/>
        <input type="email" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <input type="password" name='cpassword' placeholder='Confirm Password'/>

        <button>Sign up</button>
    </div>
  )
}

export default Signup