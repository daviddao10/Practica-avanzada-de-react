import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
//views
import Home from "./routes/home/home";
import Login from "./routes/Login/login";




function App() {
  
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
