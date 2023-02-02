import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import "./App.css";
import Hotels from "./components/Hotels/Hotels.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import HotelDetail from "./components/HotelDetail/HotelDetail.jsx";
import RoomDetail from "./components/RoomDetail/RoomDetail.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from "./components/Rooms/Rooms.jsx";
import Login from "./components/Login/Login.jsx";
import FormHotels from "./components/FormHotels/FormHotels.jsx";
import FormRooms from "./components/FormRooms/FormRooms.jsx";
import Booking from "./components/Booking/Booking.jsx";
import PayApproved from "./components/PayApproved/PayApproved.jsx";
import Maps from "./components/Maps/Maps.jsx";
//
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/signUp"} element={<Login />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetail />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/formRoom" element={<FormRooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/formHotels" element={<FormHotels />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/payApproved" element={<PayApproved/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
