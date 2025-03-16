import React, { useState } from 'react';
import { fetchWeather } from '../api/fetchWeather';
import './App.css';
import WeatherInfo from './WeatherInfo';
import NoInfoFetchCard from './NoInfoFetchCard';

const App = () => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(false);
	const [weather, setWeather] = useState({});

	const search = async (e) => {
		if (e.key === 'Enter') {
			const response = await fetchWeather(query);
			if (response.error) {
				setError(true);
				setWeather({});
			} else {
				setWeather(response.data);
				setQuery('');
				setError(false);
			}
		}
	};

	return (
		<div className="main-container">
			<div className="app-name">
				<h1>Weather PWA</h1>
			</div>
			<input
				type="text"
				placeholder="Search a city ..."
				className="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={search}
			/>
			{weather.main && <WeatherInfo weather={weather} />}
			{error && <NoInfoFetchCard />}
		</div>
	);
};

export default App;
