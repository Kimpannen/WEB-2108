import './App.css';
import { Route, Routes } from "react-router-dom";
import Kontakt from "./Components/pages/Kontakt";
import Navbar from "./Components/Navbar";
import Nyheter from "./Components/pages/Nyheter";
import Topplistor from "./Components/pages/Topplistor";
import Main from "./main";
import Biljettkop from "./Components/pages/Biljettkop";


function App() {
  return (
      <div className="App">
        <Navbar />

          <Routes>
           <Route path="/" element={<Biljettkop />}  />
              <Route path="/nyheter" element={<Nyheter />}  />
              <Route path="/topplistor" element={<Topplistor />}  />
              <Route path="/kontakt" element={<Kontakt />}  />

          </Routes>
      </div>

  );
}

export default App;
