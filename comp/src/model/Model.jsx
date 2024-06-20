import React, { useEffect } from 'react'

const Model = ({closeFun}) => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {document.body.style.overflowY = 'scroll';}
  }, [])
  return (
    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-gray-800 bg-opacity-80' onClick={closeFun}>
    <div className=' transition-transform duration-300 translate-y-6 bg-white absolute top-[20%] left-[50%] p-[20px] shadow-lg shadow-gray-700 rounded-[5px] transform -translate-x-1/2 translate-y-1/2'>
    <div className='flex justify-between'>
      <div>Login to get more features</div>
      <span className='cursor-pointer' onClick={closeFun}>&times;</span>
    </div>
    <input className='border-solid border-2 border-black' placeholder='username' type='text'></input>
    <input className='border-solid border-2 border-black' type="password" placeholder='password' />
<div>Don't have an account? <span className='underline'>Create Account</span></div>
    </div>
    </div>
  )
}

export default Model