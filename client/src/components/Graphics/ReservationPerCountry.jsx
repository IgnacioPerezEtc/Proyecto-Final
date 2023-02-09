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
import style from "./Graphics.module.css"
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
  // if (!data.length) return (<h1>load</h1>)

  return (
    <div
      className={` ${style.Count} Count`}
      style={{ width: '50vw', height: '60vh' }}>

      <h1 className='px-5'>Countries with more Reservations</h1>

      {
        (!data.length) ?
          (
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <h3 className="pt-5">No data</h3>
            </div>
          )
          :
          (
            <LineChart
              width={750}
              height={400}
              data={countryArr}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis tick={{ fontSize: 14, fontWeight: 'bold' }} dataKey="country" />
              <YAxis tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'RESERVATIONS', angle: -90, style: { fontSize: 18 } }} />
              <Tooltip wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }} />
              <Line
                connectNulls
                type="monotone"
                dataKey="reservations"
                stroke="orange"
                fill="orange"
                activeDot={{ r: 8 }}
                animationDuration={1500}
              />
            </LineChart>
          )
      }
    </div>
  )



}

export default ReservationPerCountry;