import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'
import { v4 as uuid } from 'uuid';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { useReducer, useState } from 'react';
import { UserContext } from './context/UserContext';


function App() {

  const users = [
    {
      id: uuid(),
      name : "Sajid",
    },
    {
      id: uuid(),
      name : "Tahmid",
    },
    {
      id: uuid(),
      name : "Ridoy",
    },
    {
      id: uuid(),
      name : "Tanim",
    },
  ]

    let reduce = (state,action) =>{
    if(action.type == "ADD"){
      console.log(action);
        return{
          newUsers:[
            ...state.newUsers,
            {
              id: uuid(),
              name: action.payload, 
            },
          ]
        }
    }
    else if(action.type == "DELETE"){
      let filteredUser = state.newUsers.filter((user)=>{
        return action.payload != user.id 
      })

      return{
        newUsers: filteredUser,
      }
    }
  }

  let [state,dispatch] = useReducer(reduce,{
    newUsers : users,
  })


  return (
    <>
    <UserContext.Provider value={{ state,dispatch }}>
      <Container className='mt-4'>
        <Row>
          <Users></Users>
        </Row>
        <Row className='mt-4 d-flex justify-content-center'>
          <Col className='col-lg-6'>
            <Card>
              <Card.Body>
                <Card.Title className='text-center'>
                  Add New User
                </Card.Title>
                <NewUser></NewUser>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </UserContext.Provider>
    </>
  )
}

export default App
