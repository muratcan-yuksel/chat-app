import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//the following are just examples /////////
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// The added element component

const Input = () => {
  //get the textarea input
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  //create handlechange function
  const handleChange = (e) => {
    setText({ inputValue: e.target.value, name: " Brooke says" });
  };
  //create handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, text]);
  };
  // useEffect(() => {
  //   // Do something
  //   console.log(arr);
  // }, [arr]);

  let messages = arr.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.inputValue}</p>
      </div>
    );
  });

  return (
    <div>
      {/* adds paragraphs */}
      {messages}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control onChange={handleChange} as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Input;
