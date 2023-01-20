import { Route, BrowserRouter, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Form from "./components/Form/Form.jsx";
import Details from './components/Details/Details'
import { Provider } from "react-redux";
import  store  from "./redux/store.js";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
