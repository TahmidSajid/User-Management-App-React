import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { UserContext } from '../context/UserContext';

const NewUser = () => {
    let [user,setUser] = useState('');

    let {dispatch} = useContext(UserContext);

    let handleName = (e) =>{
        setUser(e.target.value)
    }

    let submitUser = (e) => {
        e.preventDefault()
        dispatch({type:"ADD",payload:user});
        setUser('')
    }
    return (
    <>
    <Form className='text-center' onSubmit={submitUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={handleName} value={user}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default NewUser