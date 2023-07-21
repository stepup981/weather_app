<script>
import WeatherLocation from '@/components/WeatherLocation.vue';
import WeatherTemperature from '@/components/WeatherTemperature';
import WeatherIndicators from '@/components/WeatherIndicators.vue';
import WeatherAnimate from '@/components/WetherAnimate.vue'

export default {
  name: 'App',
  components: {
    WeatherLocation,
    WeatherTemperature,
    WeatherIndicators,
    WeatherAnimate,
  },
}
</script>

<template>
  <div>
    <WeatherLocation/>
    <WeatherTemperature/>
    <WeatherIndicators/>
    <WeatherAnimate/>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap');
:root {
  --cardWidth: 360px;
  --darkColor: #666;
  --grayColor: #999;
  --cardBgColor: #f1f1f1;
  --cloudAnimateTime: 150s;
  --clearAnimationTime: 120s;
  --snowAnimateTime: 15s;
  --rainAnimateTime: 70s;
}

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  max-width: 100%;
  max-height: 100%;
  /* background-color: rgba(72, 150, 222, 1); */
  color: rgb(252, 252, 252);
}

</style>

