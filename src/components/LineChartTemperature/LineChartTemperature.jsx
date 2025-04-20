import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectData,
  selectError,
  selectLoading,
} from '../../redux/weatherSlice';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const LineChartTemperature = () => {
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
      uv: Math.round(item.main.temp),
      pv: Math.round(item.main.feels_like),
    }));

  return (
    <div>
      <h2>Weather forecast for {data.city.name}</h2>

      <div>
        <LineChart
          width={800}
          height={300}
          data={charData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            name="Temperature (°C)"
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#387908"
            name="Feels like (°C)"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default LineChartTemperature;
