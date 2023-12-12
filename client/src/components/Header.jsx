import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className=' bg-slate-200 shadow-md' >
     <div className=' flex flex-row justify-between max-w-6xl items-center mx-auto p-3'>
      <Link to="/">
         <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-slate-500'>Khadidja</span>
            <span className=' text-slate-700'>Estate</span>   
          </h1>
        </Link>
       <form action="" className=' bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" className=' bg-transparent focus:outline-none w-24 sm:w-64' placeholder='Search...'  />
          <FaSearch className=' text-slate-500'/>
        </form> 
        <ul className=' flex gap-4  font-semibold'>
          <Link to="/">
            <li className=' hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
          </Link> 
          <Link to="/about"> 
            <li className=' hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
          </Link> 
          <Link to="/signin">
            <li className='text-slate-700 hover:underline cursor-pointer'>Sign in</li>
          </Link>   
        </ul> 
     </div>


    </header>
  )
}

export default Header