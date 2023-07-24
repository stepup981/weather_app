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
         const { temp, info, icon, time, name, feelsLike, } = state.weatherData;

         return {
            temp,
            info,
            icon,
            time,
            name,
            feelsLike,
            forecast: state.weatherData.forecast.reduce((acc, list) => {
               const day = {
                  dt: list.dt,
                  temp: list.main.temp,
                  tempMin: list.main.temp_min,
                  tempMax: list.main.temp_max,
                  feelsLike: list.main.feels_like,
                  description: list.weather[0].description,
                  icon: list.weather[0].icon,
                  info: list.weather[0].main,
                  wind: list.wind.speed,
                  humidity: list.main.humidity,
                  clouds: list.clouds.all,
               };
               
               acc.push(day);
               return acc;
            },),
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
            forecast: response.data.list,
            name: response.data.city.name,
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