import './App.css';
import CitySearch from './components/CitySearch/CitySearch.jsx';
import TemperatureChart from './components/TemperatureChart/TemperatureChart.jsx';

const App = () => {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <CitySearch />
      <TemperatureChart />
    </div>
  );
};

export default App;
