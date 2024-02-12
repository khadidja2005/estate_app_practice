import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector(stata => (state.user))
  return (
    <div>
      <h1 className=' text-3xl font-semibold text-center'>Profile</h1>
      
    </div>
  )
}

export default Profile