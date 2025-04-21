import './App.css';
import CitySearch from './components/CitySearch/CitySearch.jsx';
import VerticalChartTemperature from './components/VerticalChartTemperature/VerticalChartTemperature.jsx';
// import LineChartTemperature from './components/LineChartTemperature/LineChartTemperature.jsx';

const App = () => {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <CitySearch />
      <VerticalChartTemperature />
      {/* <LineChartTemperature /> */}
    </div>
  );
};

export default App;
