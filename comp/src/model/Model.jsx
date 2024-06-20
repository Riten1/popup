import React from 'react'

const Model = ({closeFun}) => {
  return (
    <div>
    <div className='flex'>
      <div>Login to get more features</div>
      <span className='cursor-pointer' onClick={closeFun}>&times;</span>
    </div>
    <input placeholder='username' type='text'></input>
    <input type="password" placeholder='password' />
<div>Don't have an account? <span className='underline'>Create Account</span></div>
    </div>
  )
}

export default Model