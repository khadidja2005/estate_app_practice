import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
  const [formData , SetformData] =useState({});
  const handelChange = (e)=> { 
    SetformData({...formData , [e.target.id] : e.target.value})
  }
  const handelSubmit =async (e) => {
    e.preventDefault();
    const res = await fetch('api/auth/signin',
    {
      
      method: 'POST',
      headers : {
        'Content-Type': 'application/json' ,
      },
      body : JSON.stringify(formData),
    }
    )
  const data = await res.json();
  console.log(data);
  }
   console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handelSubmit}>
        <input type="email" name="" id="email" placeholder='email' className=' border rounded-lg p-3'onChange={handelChange} />
        <input type="password" name="" id="password" placeholder='password' className=' border rounded-lg p-3'onChange={handelChange} />
        <button className=' uppercase bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Sign In</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>create a new account? </p>
        <Link to={"/signup"} >
          <span className=' text-blue-700'>  Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default Signin