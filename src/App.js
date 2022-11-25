import "./App.css";
import "animate.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Activites from "./Pages/Activites"
import LoginRegister from "./Pages/LoginRegister";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Activites" element={<Activites />} />
        <Route path="Login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
