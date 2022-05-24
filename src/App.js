import { doc, onSnapshot } from "firebase/firestore";
import { dataBase } from "./firebase-config";

function App() {
  const hey = doc(dataBase, 'whitelist', 3)
  const add = onSnapshot(hey, (elem) => {
    if(elem.exists()){
      console.log(elem)
    }else{
      console.log('none');
    }
  })
  console.log(dataBase);
  return (
    <div className="App">
      hey
    </div>
  );
}

export default App;
