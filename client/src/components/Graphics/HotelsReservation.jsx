import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getAllDataReservations } from "../../redux/actions";

// HOTELS WITH MORE RESERVATIONS
const HotelsReservation = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.allDataReservation);
  
  useEffect(() => {
    if (!data.length) dispatch(getAllDataReservations());
    
  }, [data.length]);

  return (
    <div
      className= {localStorage.getItem("theme")==='dark'?'border border-dark shadow rounded-3 w-75' :"bg-white border border-secondary-subtle shadow rounded-3 w-75" }
      style={{height: '60vh', paddingBottom: '40px' , backgroundColor:'#18445C'}}
    >
      <h1 className={localStorage.getItem("theme")==='dark'?'text-white px-5 text-center' :'px-5 text-center' }>Hotels with more Reservations</h1>
      {
        (!data.length) ?
          (
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <h3 className="pt-5">No data</h3>
            </div>
          )
          :
          (
            <ResponsiveContainer >
              <BarChart
                data={data}
                margin={{
                  top: 15,
                  right: 30,
                  bottom: 20,
                }}
              >
                <XAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'HOTELS', position: 'bottom', style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black' } }} dataKey="name" />
                <YAxis stroke={localStorage.getItem("theme")==='dark'? 'white':'black'} tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'RESERVATIONS', dx:-15, angle: -90, style: { fontSize: 18, fill:localStorage.getItem("theme")==='dark'?'white':'black'} }} />
                <Tooltip wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }} />
                {
                  Object.keys(data[0]).map((key, i) => {
                    if (key === 'name') return '';
                    return (
                      <Bar key={i} dataKey={key} fill={localStorage.getItem("theme")==='dark'?"#ffc85b":"#18445C"} animationDuration={1500} />
                    )
                  })
                }
              </BarChart>
            </ResponsiveContainer>
          )
      }

    </div>
  )
}

export default HotelsReservation;