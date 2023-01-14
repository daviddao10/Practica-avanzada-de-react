import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
//views
import Home from "./routes/home/home";
import Login from "./routes/Login/login";
import { useDispatch } from "react-redux";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/api";
import { setAutho } from "./redux/action/action";





const accessToken = storage.get('auth')|| ''






function App() {

  const dispatch = useDispatch()

  if (!!accessToken) {

    dispatch(setAutho({remember:true,token:accessToken}))
    setAuthorizationHeader(accessToken.accessToken)
  
  }
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}


export default App;
