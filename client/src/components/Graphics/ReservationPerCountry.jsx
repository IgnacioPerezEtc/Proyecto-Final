import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationPerCountry } from "../../redux/actions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const ReservationPerCountry = () => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.reservationPerCountry);

  useEffect(() => {
    if (!data.length) dispatch(getReservationPerCountry());

  }, [data.length])

  let contain = {};
  data.forEach(reservation => {
    const location = reservation.location;
    const country = location.slice(reservation.location.indexOf(',') + 1).trim();

    contain[country] ?
      contain[country] += parseInt(reservation.reservations)
      :
      contain[country] = parseInt(reservation.reservations)
  })

  let countryArr = []
  for (const [key, value] of Object.entries(contain)) {
    countryArr.push({
      country: key,
      reservations: value
    })
  }
  if(!data.length) return(<h1>load</h1>)
  
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <LineChart
      //size
        width={700}
        height={500}
        data={countryArr}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="9 9" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="reservations"
          stroke="#8884d8"
          fill="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  )



}

export default ReservationPerCountry;