import React from 'react'
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className=' bg-slate-200 shadow-md' >
     <div className=' flex flex-row justify-between max-w-6xl items-center mx-auto p-3'>
         <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-slate-500'>Khadidja</span>
            <span className=' text-slate-700'>Estate</span>   
          </h1>
       <form action="" className=' bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" className=' bg-transparent focus:outline-none w-24 sm:w-64' placeholder='Search...'  />
          <FaSearch className=' text-slate-500'/>
        </form> 
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul> 
     </div>


    </header>
  )
}

export default Header