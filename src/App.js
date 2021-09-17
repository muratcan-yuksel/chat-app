import { useState, useEffect } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
// const db = firebase.firestore();
function App() {
  const ref = firebase.firestore().collection("texts");
  const [state, setState] = useState([
    {
      array: [{ name: null, message: null }],
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
  const dollar = state[0].array;
  useEffect(() => {
    getInput();
  }, []);
  // console.log(state[0].name);

  const datas = state[0].array.map((item) => {
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
      <Input />
      {/* {state[0].name} */}
      {datas}
    </div>
  );
}

export default App;
