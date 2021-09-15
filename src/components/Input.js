import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//the following are just examples /////////
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// The added element component
const AddedElement = () => (
  <p>
    <input placeholder="text box" />
  </p>
);
const Input = () => {
  const [state, setState] = useState();
  const [output, setOutput] = useState([]);
  const [count, setCount] = useState(0); // Name it however you wish

  useEffect(() => {
    // Do something
    console.log("effect");
    return <p>output</p>;
  }, [output]);

  const handleClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setOutput(state, ...output);
    console.log(output);
  };

  // const createPara = output.map((item) => {
  //   console.log(item);
  // });

  const handleText = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  // const mapped = output.map((item) => {});

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
      {/* <div> {createPara} </div> */}
      {[...Array(count)].map((_, i) => (
        <AddedElement key={i} />
      ))}
    </div>
  );
};

export default Input;
