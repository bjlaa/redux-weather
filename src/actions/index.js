const API_KEY = '02a0900e6eb6a56f45d7f3e7c5019257';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;

	return {
		type: FETCH_WEATHER
	};
}