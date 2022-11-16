import "./App.css";
import "animate.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
