import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllDataReservations } from "../../redux/actions";

// HOTELS WITH MORE RESERVATIONS
const HotelsReservation = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.allDataReservation);
  
  useEffect(()=> {
    if(!data.length) dispatch( getAllDataReservations() );
    
  }, [data.length]);

  if(!data.length) return (<h1>load</h1>);

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {
            Object.keys(data[0]).map((key, i) => {
              if(key === 'name') return '';
              return (
                <Bar key={i} dataKey={key} fill="orange" />
              )
            })
          }
        </BarChart>
      </ResponsiveContainer>
  )
}

export default HotelsReservation;