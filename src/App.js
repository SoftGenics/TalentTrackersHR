import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import People from "./Components/People/People";
import MyProfile from "./Components/Myprofile/MyProfile";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbaord" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/People" element={<People />} />
      <Route path="/MyProfile" element={<MyProfile/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;