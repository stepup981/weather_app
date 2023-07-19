<script>
import WeatherLocation from '@/components/WeatherLocation.vue';
import WeatherTemperature from '@/components/WeatherTemperature';
import WeatherIndicators from './components/WeatherIndicators.vue';

export default {
  name: 'App',
  components: {
    WeatherLocation,
    WeatherTemperature,
    WeatherIndicators,
  },
  // created() {
  //   this.$store.dispatch('fetchWeatherData', 'Kirov');
  // }
}
</script>

<template>
  <div>
    <WeatherLocation/>
    <WeatherTemperature/>
    <WeatherIndicators/>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap');

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  max-width: 100%;
  background-color: rgba(72, 150, 222, 1);
  color: white;
}
</style>

