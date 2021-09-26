import { useState, useEffect, useRef } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
import "./style/style.css";

const Display = ({ state }) => {
  const stateEndRef = useRef(null);
  const scrollToBottom = () => {
    stateEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // getInput();
    scrollToBottom();
  }, [state]);

  return (
    <div>
      {state[0].array.map((item) => (
        <div className="messages">
          <p className="itemName">{item.name}</p>
          <p className="itemMessage">{item.message}</p>
        </div>
      ))}
      <div ref={stateEndRef} />
    </div>
  );
};

function App() {
  const ref = firebase.firestore().collection("texts");
  const [state, setState] = useState([
    {
      array: [{ name: "", message: "" }],
    },
  ]);
  const [loading, setLoading] = useState(false);

  function getInput() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setState(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getInput();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Display className="display" state={state} />
      <Input />
    </div>
  );
}

export default App;
