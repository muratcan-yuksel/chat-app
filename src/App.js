import Input from "./components/Input";
import { firebase } from "./initFirebase";
const db = firebase.firestore();
function App() {
  console.log(db.collection("texts"));
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;

{
  /* <div>
<h1>React & Firebase</h1>
<h2>By @farazamiruddin</h2>
<code>
  <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
</code>
</div> */
}
