import React, { useContext } from 'react'
import User from './User'
import { UserContext } from '../context/UserContext';

const Users = () => {
  let {state} = useContext(UserContext);
  return ( 
    <>
        {state.newUsers.map((user) => {
            return <User user={user} key={user.id} id={user.id}/> 
        })}
    </>
  )
}

export default Users