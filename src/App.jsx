import './App.css';
import CitySearch from './components/CitySearch/CitySearch.jsx';
// import LineChartTemperature from './components/LineChartTemperature/LineChartTemperature.jsx';
import VerticalChartTemperature from './components/VerticalChartTemperature/VerticalChartTemperature.jsx';

const App = () => {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <CitySearch />
      {/* <LineChartTemperature /> */}
      <VerticalChartTemperature />
    </div>
  );
};

export default App;
