import createStore from 'vuex';


export default createStore( {
   state: {
      weather:null
   },
   getters: {
      getWeather(state) {
         return state.weather
      }
   },
   matations: {
      
   },
   actions: {
      
   }
})