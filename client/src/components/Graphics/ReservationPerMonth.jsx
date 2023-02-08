import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationPerMonth } from "../../redux/actions";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const ReservationPerMonth = () => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.reservationPerMonth);

  useEffect(() => {
    if(!data.length) dispatch( getReservationPerMonth() );

  }, [data.length])
  console.log(data);
  return (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="reservations" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}

export default ReservationPerMonth;