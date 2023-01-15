import { Routes, Route, Navigate } from "react-router-dom";
import { setAutho } from "./redux/action/action";
import { useSelector } from "react-redux";

import "./App.css";
//views
import Home from "./routes/home/home";
import Login from "./routes/Login/login";
import { useDispatch } from "react-redux";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/api";

import RequireAuth from "./components/common/RequiereAuth";





const accessToken = storage.get('auth')|| ''






function App() {
 // const token = useSelector((state: any) => state.Reducer)
  //console.log("🚀 ~ file: App.tsx:26 ~ App ~ token", token)
  
  const dispatch = useDispatch()

  if (!!accessToken) {
 
  

    
    const loggin =setAuthorizationHeader(accessToken)
    
    dispatch(setAutho({remember:true,token:loggin}))
  
  }
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" index element={
          <RequireAuth><Home /></RequireAuth>
        
        } />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}


export default App;
