import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
   state: {
      apiBase: "https://api.openweathermap.org/data/2.5/",
      apiKey: "7b0cd3aa9c808b272f5687c5c4a2997f",
      isError: false,
      weatherData: {}
   },
   getters: {
      getWeatherMain(state) {
         const { temp, info, icon, time, name, forecast } = state.weatherData;

         return {
            temp,
            info,
            icon,
            time,
            name,
            forecast
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
      async fetchWeatherData({ commit, state }, { search, latitude, longitude }) {
         try {
            const url = `${state.apiBase}forecast?${search ? `q=${search}&` : ''}${latitude ? `lat=${latitude}&` : ''}${longitude ? `lon=${longitude}&` : ''}cnt=4&units=metric&APPID=${state.apiKey}`;
            const response = await axios.get(url);

            const newWeatherData = {
               forecast: response.data.list.reduce((acc, item) => {
                  const day = {
                     dt: item.dt,
                     temp: item.main.temp,
                     tempMin: item.main.temp_min,
                     tempMax: item.main.temp_max,
                     feelsLike: item.main.feels_like,
                     description: item.weather[0].description,
                     icon: item.weather[0].icon,
                     info: item.weather[0].main,
                     wind: item.wind.speed,
                     humidity: item.main.humidity,
                     clouds: item.clouds.all,
                  };

                  acc.push(day);
                  return acc;

               }, []),
               name: response.data.city.name,
               lat: response.data.city.coord.lat,
               lon: response.data.city.coord.lon,
            };
            console.log(newWeatherData);
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