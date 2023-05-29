


import Body from "./Components/BodyContainer/body";
import LandeingPage from "./Components/LandeingPage";
import LoginFormPage from "./Components/LoginPage/LoginFormPage";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllpageView from "./Pages/PageViewContainer/AllpageView";

function App() {
  return (
    <div >
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandeingPage/>} />
          <Route path="/body" element={<Body />} />
          <Route path="/Login" element={<LoginFormPage/>}/>
          <Route path="/viewmore" element={<AllpageView/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
