import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservationPerMonth } from "../../redux/actions";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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
      className= {localStorage.getItem("theme")==='dark'?' border border-dark shadow rounded-3 w-75' :"bg-white border border-secondary-subtle shadow rounded-3 w-75" }
      style={{height: '60vh', paddingBottom: '40px', backgroundColor:'#18445C' }}
    >
      <h1 className={localStorage.getItem("theme")==='dark'?'text-white px-5 text-center' :'px-5 text-center' }>Months with more Reservations in the year</h1>
      {
        (!data.length) ?
        (
          <div className="mt-5 d-flex justify-content-center align-items-center">
            <h3 className="pt-5">No data</h3>
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
            top: 15,
            right: 50,
            bottom: 20,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{fontSize: 14, fontWeight:'bold'}} label={{value:'MONTHS', position: 'bottom', style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black' }}} dataKey="month" />
          <YAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{fontSize: 14, fontWeight:'bold'}} label={{value:'RESERVATIONS', dx:-15, angle: -90, style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black' }}}/>
          <Tooltip wrapperStyle={{fontSize:'14px', fontWeight:'bold'}}/>
          <Area fillOpacity={20} type="monotone" dataKey="reservations" stroke="#ffc85b" fill="#ffc85b" animationDuration={1500}/>
        </AreaChart>
      </ResponsiveContainer>
        )
      }
      
      
    </div>
  )
}

export default ReservationPerMonth;