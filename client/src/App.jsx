import React from 'react'

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './components/Header'
import PrivateRouter from './components/PrivateRouter'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/about' element={<About/>}/>
     <Route element={<PrivateRouter/>}>
         <Route path='/profile' element={<Profile/>}/>
     </Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App