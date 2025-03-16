import React from 'react';

const WeatherInfo = ({ weather }) => {
	return (
		<div className="city">
			<h2 className="city-name">
				<span>
					{weather.name}
					<sup>{weather.sys.country}</sup>
				</span>
			</h2>
			<div className="city-temp">{Math.round(weather.main.temp)}</div>
			<sup>&deg;C</sup>
			<div className="info">
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={weather.weather[0].description}
					className="city-icon"
				/>
				<p>{weather.weather[0].description}</p>
			</div>
		</div>
	);
};

export default WeatherInfo;
