import { useState, useEffect } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
import "./style/style.css";
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

  const display = state[0].array.map((item) => {
    return (
      <div className="messages">
        <p className="itemName">{item.name}</p>
        <p className="itemMessage">{item.message}</p>
      </div>
    );
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <div className="display">{display}</div>
      <Input />
    </div>
  );
}

export default App;
