import { createStore } from 'vuex';
import axios from "axios";

export default createStore ({
   state: {
      apiBase: "https://api.openweathermap.org/data/2.5/",
      apiKey: "7b0cd3aa9c808b272f5687c5c4a2997f",
      isError: false,
      weatherData: {}
   },
   getters: {
      getWeatherMain(state) {
         const { temp, info, icon, time, name, feelsLike } = state.weatherData;

         return {
            temp,
            info,
            icon,
            time,
            name,
            feelsLike
         };
      },
      getWeatherIndicators(state) {
         const { wind, humidity, clouds, pressure } = state.weatherData;
         
         return {
            wind,
            humidity,
            clouds,
            pressure
         };
      },
      getError(state) {
         return state.isError;
      },
   },
   mutations: {
      ["SET_WEATHER_DATA"](state, data) {
         state.weatherData = data;
      },
      ["SET_ERROR"](state, value) {
         state.isError = value;
      },
   },
   actions: {
      async fetchWeatherData({ commit, state }, { search, latitude, longitude } ) {
         try {
            const url = `${state.apiBase}weather?${search ? `q=${search}&` : ''}${latitude ? `lat=${latitude}&` : ''}${longitude ? `lon=${longitude}&` : ''}units=metric&APPID=${state.apiKey}`;
            const response = await axios.get(url);
            const newWeatherData = {
            name: response.data.name,
            temp: response.data.main.temp,
            tempMin: response.data.main.temp_min,
            tempMax: response.data.main.temp_max,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon.substring(0, 2),
            info: response.data.weather[0].main,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            clouds: response.data.clouds.all,
            country: response.data.sys.country,
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
            };
            commit("SET_WEATHER_DATA", newWeatherData);
            commit("SET_ERROR", false);
         } catch (error) {
            console.error(error);
            commit("SET_ERROR", true);
            commit("SET_WEATHER_DATA", {});
         }
         },
      }
})
