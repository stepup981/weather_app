import createStore from 'vuex';
// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

export default createStore ({
   state: {
      apiBase: "https://api.openweathermap.org/data/2.5/",
      apiKey: "fbec21b92ec15b7a4e9e6d10165662d4", 
      defaultSearch: "Kirov",
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
})
