import { useState, useEffect } from "react";
import Input from "./components/Input";
import { firebase } from "./initFirebase";
// const db = firebase.firestore();
function App() {
  // const [state, setState] = useState({});
  // // console.log(db);
  // db.collection("cafes")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       // console.log(doc.data());
  //       setState(doc);
  //     });
  //   });
  // console.log(state.data().name);

  const ref = firebase.firestore().collection("cafes");
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCafes() {
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
    getCafes();
    console.log(state);
  }, []);
  console.log(state[0].name);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Input />
      {state[0].name}
    </div>
  );
}

export default App;
