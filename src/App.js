import './App.css';
import Registration from './Registration';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <HashRouter>
         <Registration/>
      </HashRouter>,
      </div>
  );
}

export default App;
