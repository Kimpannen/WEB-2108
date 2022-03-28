import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import OtherView from "./views/OtherView";

function App() {

  return (
      <BrowserRouter>
          <h1>App</h1>

          <Routes>
            <Route path={'/'} element={<HomeView/>} />
              <Route path={'/other'} element={<OtherView/>} />
          </Routes>

      </BrowserRouter>

  )
}

export default App;
