import { useState, useEffect } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
// const db = firebase.firestore();
function App() {
  const ref = firebase.firestore().collection("cafes");
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCafes() {
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
  useEffect(() => {
    getCafes();
    // console.log(state);
  }, []);
  // console.log(state[0].name);

  const datas = state.map((item) => {
    // console.log(item);
    return (
      <div>
        <p>{item.name}</p>
      </div>
    );
  });
  //the following updates the firestore database
  // const db = firebase.firestore();
  // db.collection("cafes")
  //   .doc("Z47VuwzD3Iw3FdxEXZRY")
  //   .update({
  //     array: [{ name: "Steph", message: "I'm saying something" }],
  //   });

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
