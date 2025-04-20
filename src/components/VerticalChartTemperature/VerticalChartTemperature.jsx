import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectData,
  selectError,
  selectLoading,
} from '../../redux/weatherSlice';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const VerticalChartTemperature = () => {
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <div>...Loading</div>;
  if (error) return <div>City not found. Please try another name.</div>;
  if (!data || !data.city) return <div>No data to display</div>;

  const charData = data.list
    .filter((_, index) => index % 8 === 0)
    .map(item => ({
      name: new Date(item.dt * 1000).toLocaleDateString('en', {
        weekday: 'short',
      }),
      uv: Math.floor(item.main.temp),
      pv: Math.floor(item.main.feels_like),
    }));

  return (
    <div>
      <h2>Weather forecast for {data.city.name}</h2>

      <div>
        <BarChart
          width={800}
          height={300}
          data={charData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            name="Temperature (°C)"
            fill="orange"
          />
          <Bar
            type="monotone"
            dataKey="pv"
            stroke="#387908"
            name="Feels like (°C)"
            fill="green"
          />
        </BarChart>
      </div>
    </div>
  );
};

export default VerticalChartTemperature;
