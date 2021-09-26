import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { firebase } from "../initFirebase";

//the following are just examples /////////
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// The added element component

const Input = () => {
  //get the textarea input
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const [firstTimeUserName, setFirstTimeUserName] = useState(null);
  const [name, setName] = useState(null);

  //create handlechange function
  const handleChange = (e) => {
    setText({
      inputValue: e.target.value,
      name: name,
    });
  };
  //create handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, text]);
    e.target.reset();
  };

  // //the following updates the firestore database
  const db = firebase.firestore();
  if (arr.length > 0) {
    db.collection("texts")
      .doc("DwcucDim2waadle0CLOF")
      .update({
        //this is how you add a new item to the array in firestore
        array: firebase.firestore.FieldValue.arrayUnion({
          //new object comes here
          name: arr.slice(-1)[0].name,
          message: arr.slice(-1)[0].inputValue,
        }),
      });
  }
  //get userName
  const getUserName = (e) => {
    setFirstTimeUserName(e.target.value);
  };
  //write username on submit
  const writeUserName = (e) => {
    e.preventDefault();
    setName(firstTimeUserName);
  };
  //use "enter" key for user name
  const handleEnterUserName = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      writeUserName();
    }
  };
  //conditionnal rendering starts here
  if (name === null) {
    return (
      <Form onSubmit={writeUserName} onKeyPress={handleEnterUserName}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            onChange={getUserName}
            type="text"
            placeholder="write your user name to join chat"
          />
        </Form.Group>
        <Button title="getUserName" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  } else {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write your message here</Form.Label>
          <Form.Control
            className="textArea"
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button title="messageForm" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default Input;
