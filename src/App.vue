<script>
import LocationWeather from '@/components/LocationWeather.vue';

export default {
  name: 'App',
  components: {
    LocationWeather
  }
}
</script>

<template>
  <LocationWeather/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap');

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgba(72, 150, 222, 1);
  color: white;
}
</style>

