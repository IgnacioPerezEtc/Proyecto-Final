import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import "./App.css";
import Hotels from "./components/Hotels/Hotels.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
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
import Reservation from "./components/Reservation/Reservation.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Admin from "./components/Admin/Admin.jsx";
import EditHotel from "./components/Admin/EditHotel/EditHotel.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import UserEdit from "./components/UserEdit/UserEdit.jsx";
import ErrorRoutes from "./components/ErrorRoutes/ErrorRoutes.jsx";
import EditRoom from "./components/Admin/EditRoom/EditRoom.jsx";
//
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path={"/"} element={<Login />} />
            <Route exact path={"/signUp"} element={<Login />} />
            <Route exact path="/home" element={<LandingPage />} />
            <Route exact path="/hotels" element={<Hotels />} />
            <Route exact path="/hotels/:id" element={<HotelDetail />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/formRoom/:id" element={<FormRooms />} />
            <Route exact path="/rooms/:id" element={<RoomDetail />} />
            <Route exact path="/formHotels" element={<FormHotels />} />
            <Route exact path="/Booking" element={<Booking />} />
            <Route exact path="/rooms" element={<Rooms />} />
            <Route exact path="/payApproved" element={<PayApproved />} />
            <Route exact path="/reservationHistory" element={<Reservation />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/editHotel/:id" element={<EditHotel />} />
            <Route exact path="/editRoom/:id" element={<EditRoom />} />
            <Route exact path="/userProfile" element={<UserProfile />} />
            <Route exact path="/userEdit" element={<UserEdit />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
