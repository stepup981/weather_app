import createStore from 'vuex';
// import axios from "axios";

export default createStore ({
   state: {
      apiBase: "https://api.openweathermap.org/data/2.5/",
      apiKey: "fbec21b92ec15b7a4e9e6d10165662d4", 
      search: "",
      isError: false,
      weatherData: {},
   },
   getters: {
      getWeatherCity(state) {
         return state.weatherData.city;
      },
      getWeatherTemperaute(state) {
         const {temp, info, icon, time} = state.weatherData;
         return {
            temp,
            info,
            icon,
            time
         };
      },
      getWeatherIndicators(state) {
         const {wind, humidity, pressure} = state.weatherData;
         return {
            wind,
            humidity,
            pressure
         };
      },
      isSearched(state) {
         return state.search !== "";
      },
      getError(state) {
         return state.isError;
      },
   },
   mutations: {

   },
   actions: {
      async fetchWeather (state) {
         await fetch(state.apiBase,{apiKey:state.apiKey})
      }
   }
})
