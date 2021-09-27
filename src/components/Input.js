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
  const [fireArr, setFireArr] = useState();

  // const [time, setTime] = useState(new Date().toISOString().slice(0, 10));

  //create handlechange function
  const handleChange = (e) => {
    setText({
      inputValue: e.target.value,
      name: name,
      // date: time,
    });
  };
  //create handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // setTime(new Date().toISOString().slice(0, 10));
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
          // date: arr.slice(-1)[0].date.toString(),
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

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    //somehow, for the name submit, I don't need this
    //also, the user can use shift + enter but it won't affect the outcome. Dunno how'd I do that tbh
    if (e.charCode === 13 && !e.shiftKey) {
      setArr([...arr, text]);
      e.target.value = "";
    }
  };
  //conditionnal rendering starts here
  if (name === null) {
    return (
      <Form onSubmit={writeUserName}>
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
      <Form onKeyPress={handleKeypress} onSubmit={handleSubmit}>
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
