import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationPerCountry } from "../../redux/actions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
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
  // if (!data.length) return (<h1>load</h1>)

  return (
    <div
      className= {localStorage.getItem("theme")==='dark'?' border border-dark shadow rounded-3 w-75' :"Count w-75" }
      style={{height: '60vh', paddingBottom: '40px' , backgroundColor:'#18445C' }}
    >

      <h1 className={localStorage.getItem("theme")==='dark'?'text-white px-5 text-center' :'px-5 text-center' }>Countries with more Reservations</h1>

      {
        (!data.length) ?
          (
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <h3 className={localStorage.getItem("theme")=== "dark"? 'pt-5 text-dark' : 'pt-5'}>No data</h3>
            </div>
          )
          :
          (
            <ResponsiveContainer>
              <LineChart
                width={750}
                height={400}
                data={countryArr}
                margin={{
                  top: 15,
                  right: 30,
                  bottom: 20
                }}
              >
                <XAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{ fontSize: 14, fontWeight: 'bold' }} label={{value:'COUNTRIES', position: 'bottom', style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black' }}} dataKey="country" />
                <YAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'RESERVATIONS', dx:-15, angle: -90, style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black' } }} />
                <Tooltip wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }} />
                <Line
                  connectNulls
                  type="monotone"
                  dataKey="reservations"
                  stroke="orange"
                  strokeWidth={3}
                  fill="orange"
                  activeDot={{ r: 8 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          )
      }
    </div>
  )



}

export default ReservationPerCountry;