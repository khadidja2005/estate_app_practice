import React from 'react'

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Profile from './Pages/Profile'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/profile' element={<Profile/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App