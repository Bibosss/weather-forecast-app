import React, { useState } from 'react';
import css from './CitySearch.module.css';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/api';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        value={city}
        placeholder="Write city"
        onChange={e => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySearch;
