import React from 'react'

import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import {useDispatch} from 'react-redux'
import { SigninStart, SigninSuccess } from '../redux/User/UserSlice';
import {useNavigate} from 'react-router-dom'

function OAth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelclick = async ()=> {
        try {
         const provider = new GoogleAuthProvider();
         const Auth = getAuth(app)
         const result = await signInWithPopup(Auth , provider)
         console.log(result)
         const res = await fetch ('/api/auth/google' , {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                 name: result.user.displayName ,
                 email : result.user.email ,
                 photo : result.user.photoURL})

         })
         const data = await res.json();
         console.log(data);
         dispatch(SigninSuccess(data))
         navigate('/');
        } catch (error) {
           console.log("can not connect to google authentication", error)
        }
    }
  return (
    <button type='button' onClick={handelclick} className=' bg-red-700 p-3 text-white rounded-lg uppercase hover:opacity-95'>
        Continue with google
    </button>
  )

}
export default OAth