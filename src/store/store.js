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
         const { temp, info, icon, time, name, feelsLike, nextTemp } = state.weatherData;

         return {
            temp,
            info,
            icon,
            time,
            name,
            feelsLike,
            nextTemp
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
            const url = `${state.apiBase}forecast?${search ? `q=${search}&` : ''}${latitude ? `lat=${latitude}&` : ''}${longitude ? `lon=${longitude}&` : ''}units=metric&APPID=${state.apiKey}`;
            const response = await axios.get(url);
            const newWeatherData = { 
               name: response.data.city.name,
               dt: response.data.dt, 
               temp: response.data.list[0].main.temp, 
               tempMin: response.data.list[0].main.temp_min, 
               tempMax: response.data.list[0].main.temp_max, 
               feelsLike: response.data.list[0].main.feels_like, 
               description: response.data.list[0].weather[0].description, 
               icon: response.data.list[0].weather[0].icon, 
               info: response.data.list[0].weather[0].main, 
               wind: response.data.list[0].wind.speed, 
               humidity: response.data.list[0].main.humidity, 
               pressure: response.data.list[0].main.pressure, 
               clouds: response.data.list[0].clouds.all, 
               country: response.data.city.country, 
               lat: response.data.city.coord.lat,
               lon: response.data.city.coord.lon,
               nextTemp: response.data.list[1].main.temp, 
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