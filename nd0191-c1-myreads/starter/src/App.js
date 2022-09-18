import "./App.css";

import List from "./List";
import SearchPage from "./SearchPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {



  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<List />}/>
        <Route path = "/Search" element= {<SearchPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
