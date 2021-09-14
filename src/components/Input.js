import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//the following are just examples /////////
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const Input = () => {
  const [state, setState] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleText = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control onChange={handleText} as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Input;
