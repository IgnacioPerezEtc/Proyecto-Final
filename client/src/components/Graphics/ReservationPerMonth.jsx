import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationPerMonth } from "../../redux/actions";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import style from "./Graphics.module.css"

const ReservationPerMonth = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.reservationPerMonth);
  const months = [
    {month:"january", reservations: 0},
    {month:"february", reservations: 0},
    {month:"march", reservations: 0},
    {month:"april", reservations: 0},
    {month:"may", reservations: 0},
    {month:"june", reservations: 0},
    {month:"july", reservations: 0},
    {month:"august", reservations: 0},
    {month:"september", reservations: 0},
    {month:"october", reservations: 0},
    {month:"november", reservations: 0},
    {month:"december", reservations: 0}
  ]
  const finalData = months.map(elem => {
    const found = data.find(month => month["month"].trim() === elem["month"])
    return found ? found : elem;
  })
  
  console.log('finalData: ',finalData)



  useEffect(() => {
    if (!data.length) dispatch(getReservationPerMonth());

  }, [data.length])
  
  return (
    <div 
    className={` ${style.Count} bg-white border border-secondary-subtle shadow rounded-3`}
      style={{ width: '50vw', height: '60vh' }}
    >
      <h1 className={localStorage.getItem("theme")=== "dark"? 'px-5 text-dark' : 'px-5'}>Months with more Reservations in the year</h1>
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
        <AreaChart
          width={700}
          height={300}
          data={finalData}
          margin={{
            top: 10,
            right: 50,
            left: 0,
            bottom: 50,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis tick={{fontSize: 14, fontWeight:'bold'}} dataKey="month" />
          <YAxis tick={{fontSize: 14, fontWeight:'bold'}}/>
          <Tooltip wrapperStyle={{fontSize:'14px', fontWeight:'bold'}}/>
          <Area type="monotone" dataKey="reservations" fill="#840000" animationDuration={1500}/>
        </AreaChart>
      </ResponsiveContainer>
        )
      }
      
      
    </div>
  )
}

export default ReservationPerMonth;