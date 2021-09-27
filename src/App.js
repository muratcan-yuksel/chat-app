import { useState, useEffect, useRef } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
import "./style/style.css";
import uniqid from "uniqid";

const Display = ({ state }) => {
  const stateEndRef = useRef(null);
  const scrollToBottom = () => {
    stateEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [state]);

  const result = state[0].array
    //show only last 50 items
    .slice(Math.max(state[0].array.length - 50, 0))
    .map((item) => (
      <div key={uniqid()} className="messages">
        <div className="flexing">
          <p className="itemName">{item.name}</p>
          <p className="itemDate">
            {new Date(
              item.dateTime.seconds * 1000 + item.dateTime.nanoseconds / 1000000
            ).toDateString() +
              " " +
              new Date(
                item.dateTime.seconds * 1000 +
                  item.dateTime.nanoseconds / 1000000
              ).toLocaleTimeString()}{" "}
          </p>
        </div>
        <p className="itemMessage">{item.message}</p>
      </div>
    ));

  return (
    <div>
      {result}
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
      <div className="display">
        <Display state={state} />
      </div>
      <div className="inputField">
        <Input />
      </div>
    </div>
  );
}

export default App;
