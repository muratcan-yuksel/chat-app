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
      {state[0].array
        //show only the last 50 items
        .slice(Math.max(state[0].array.length - 50, 0))
        .map((item) => (
          <div className="messages">
            <p className="itemName">{item.name}</p>
            <p className="itemMessage">{item.message}</p>
            {/* <p className="itemDate">{item.date}</p> */}
            <p>{new Date().toString()} </p>
            {/* {console.log(item.date)} */}
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
    // console.log(state[0].array.slice(-1)[0].message);

    getInput();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <div className="display">
        <Display state={state} />
      </div>
      <Input />
    </div>
  );
}

export default App;
