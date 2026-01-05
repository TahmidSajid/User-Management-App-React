import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const User = ({user,id}) => {
    let {dispatch} = useContext(UserContext);
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{id}</Card.Title>
              <h3>{user.name}</h3>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={(e) => dispatch({type:'DELETE',payload:id})}>Delete</Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default User;
