import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Form from "./components/Form/Form.jsx";
import HotelDetail from "./components/HotelDetail/HotelDetail.jsx";
import { Provider } from "react-redux";
import  store  from "./redux/store.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<HotelDetail />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
