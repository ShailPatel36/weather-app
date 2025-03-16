import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4634d0e287b45a56ea80fa4a6f6c8ba0';

export const fetchWeather = async (query) => {
	try {
		const { data } = await axios.get(URL, {
			params: {
				q: query,
				units: 'metric',
				APPID: API_KEY
			}
		});
		return { data, error: false };
	} catch (e) {
		console.error('Weather API Error:', e.response?.data || e.message);
		return { data: null, error: true };
	}
};
