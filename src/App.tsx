import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
//views
import Home from "./routes/home";
import Login from "./routes/Login";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/api";
import { useDispatch } from "react-redux";
import { setLoading } from "./redux/action";


function App() {
  const dispatch = useDispatch()

  const accessToken = storage.get("auth"); 
  
  if (!!accessToken) {
    try {
      setAuthorizationHeader(accessToken)
      dispatch(setLoading(!!accessToken))
    } catch (error) {
      
    }
    

    
  }

  return (
    <div>
      <Routes>
        <Route path="/login"element={<Login/>} />
        <Route path="/home" index element={<Home />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      hola putos
      <Home  />
    </div>
  );
}*/
//export default App;
export default App;
