import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
      className='bg-white border border-secondary-subtle shadow rounded-3'
      style={{ width: '50vw', height: '60vh', paddingBottom: '40px', paddingRight: '30px' }}
    >
      <h1 className={localStorage.getItem("theme")=== "dark"? 'px-5 text-dark' : 'px-5'}>Hotel with more Reservations</h1>
      {
        (!data.length) ?
          (
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <h3 className={localStorage.getItem("theme")=== "dark"? 'pt-5 text-dark' : 'pt-5'}>No data</h3>
            </div>
          )
          :
          (
            <ResponsiveContainer >
              <BarChart
                // width={50}
                // height={30}
                data={info}
                margin={{
                  // top: 5,
                  right: 30,
                  // left: 20,
                  bottom: 20,
                }}
              >
                {/* <CartesianGrid strokeDasharray="2 2" /> */}
                <XAxis tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'HOTELS', position: 'bottom', style: { fontSize: 18 } }} dataKey="name" />
                <YAxis tick={{ fontSize: 14, fontWeight: 'bold' }} label={{ value: 'RESERVATIONS', angle: -90, style: { fontSize: 18 } }} />
                <Tooltip wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }} />
                {/* <Legend wrapperStyle={{fontSize: "14px"}} /> */}
                {
                  Object.keys(data[0]).map((key, i) => {
                    if (key === 'name') return '';
                    return (
                      <Bar key={i} dataKey={key} fill="#18445c" animationDuration={1500} />
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