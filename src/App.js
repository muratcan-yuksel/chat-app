import { useState, useEffect } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
import "./style/style.css";
// const db = firebase.firestore();
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
        // console.log(doc.data());
      });
      setState(items);
      setLoading(false);
    });
  }
  // console.log(state);
  useEffect(() => {
    getInput();
  }, []);
  // console.log(state[0].name);

  const display = state[0].array.map((item) => {
    // console.log(item);
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.message}</p>
      </div>
    );
  });

  // console.log(state);
  // console.log(state[0].array);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <div className="display">{display}</div>
      <Input />
      {/* {state[0].name} */}
    </div>
  );
}

export default App;
