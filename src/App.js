import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/home";
import { Feed } from "./pages/feed";
import { Deputados } from "./pages/deputados"
import { Partidos } from "./pages/partidos"
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/deputados" element={<Deputados/>} />       
        <Route path="/partidos" element={<Partidos/>} />       


      </Routes>
    </Router>
  );
};

export default App;
