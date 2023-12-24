import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" name="" id="username" placeholder='username' className=' border rounded-lg p-3' />
        <input type="email" name="" id="email" placeholder='email' className=' border rounded-lg p-3' />
        <input type="password" name="" id="password" placeholder='password' className=' border rounded-lg p-3' />
        <button className=' uppercase bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account? </p>
        <Link to={"/signin"} >
          <span className=' text-blue-700'>  Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup