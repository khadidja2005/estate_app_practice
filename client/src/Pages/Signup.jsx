import React, { useState } from 'react'
import {Link , useNavigate } from 'react-router-dom'

const Signup = () => {
  const [ test , settest] = useState(false);
  const [formData , SetformData] =useState({});
  const [error , seterror] = useState(null);
  const [loading , setloading] = useState(false);
  const handelChange = (e)=> { 
    
    SetformData({...formData , [e.target.id] : e.target.value})
  }
  const handelSubmit =async (e) => {
     
    e.preventDefault();
    try {
      setloading(true);
    const res = await fetch('api/auth/signup',

    {
      
      method: 'POST',
      headers : {
        'Content-Type': 'application/json' ,
      },
      body : JSON.stringify(formData),
    }
    )
  const data = await res.json();
  if(data.success === false) {
    seterror(data.message);
    setloading(false)
    
    return
  }
 setloading(false);
 seterror(null);
  settest(true);
 //{ true &&<p className=' text-green-500 mt-5'>user created successfully</p>}
 //const navigate = useNavigate();
 //useNavigate('/signin');
  console.log(data);
    } catch (error) {
     setloading(false);
     seterror(error.message) 
    }

  }
   console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handelSubmit}>
        <input type="text" name="" id="username" placeholder='username' className=' border rounded-lg p-3'onChange={handelChange} />
        <input type="email" name="" id="email" placeholder='email' className=' border rounded-lg p-3'onChange={handelChange} />
        <input type="password" name="" id="password" placeholder='password' className=' border rounded-lg p-3'onChange={handelChange} />
        <button disabled={loading} className=' uppercase bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-60'>{loading ? "loading ..." : "Sign Up"  }</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account? </p>
        <Link to={"/signin"} >
          <span className=' text-blue-700'>  Sign in</span>
        </Link>
      </div>
      { test && <p className=' text-green-500 mt-5'>user created  successfully</p>}
      {error && <p className=' text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Signup