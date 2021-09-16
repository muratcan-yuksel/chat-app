import Input from "./components/Input";
import firebase from "firebase";
function App() {
  const firebaseApp = firebase.apps[0];
  console.log(firebaseApp);
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
