<script>
import { mapGetters } from "vuex"

export default {
   computed: {
      ...mapGetters(["getWeatherIndicators", "getWeatherMain"])
   },
};
</script>

<template>
   <div class="indicators">
      <div class="indicators__firstsection">
         <div class="indicators__blocksgrid">
            <img
               class="imgfirstsection"
               src="../assets/img/windspeed.png"
               alt="wind"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ getWeatherIndicators.wind }}m/s</div>
               <div class="indicators__subtitle">Wind speed</div>
            </div>
         </div>
         <div class="indicators__blocksgrid">
            <img
               class="imgfirstsection"
               src="../assets/img/humidity.png"
               alt="humidity"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ getWeatherIndicators.humidity }}%</div>
               <div class="indicators__subtitle">Humidity</div>
            </div>
         </div>
         <div class="indicators__blocksgrid">
            <img
               class="imgfirstsection"
               src="../assets/img/cloud.png"
               alt="clouds"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ getWeatherIndicators.clouds }}%</div>
               <div class="indicators__subtitle">Cloudiness</div>
            </div>
         </div>
      </div>
      <div class="indicators__secondsection">
         <div class="indicators__secondblocksgrid">
            <div class="indicators__day">Now</div>
            <img 
            class="imgsecondsection" 
            :src="'http://openweathermap.org/img/w/' + getWeatherMain.icon + '.png'" 
            alt="Weather Icon"
            >
            <div class="indicators__degree">{{ Math.round(getWeatherMain.temp) }}&deg;</div>
         </div>
         <div class="indicators__secondblocksgrid">
            <div class="indicators__day">16</div>
            <img
               class="imgsecondsection"
               :src="'http://openweathermap.org/img/w/' + getWeatherMain.icon + '.png'" 
               alt=""
            >
            <div class="indicators__degree">{{ Math.round(getWeatherMain.nextTemp) }}&deg;</div>
         </div>
         <div class="indicators__secondblocksgrid">
            <div class="indicators__day">18</div>
            <img
               class="imgsecondsection"
               src="../assets/img/heavy-showers.png"
               alt=""
            >
            <div class="indicators__degree">15&#176;</div>
         </div>
         <div class="indicators__secondblocksgrid">
            <div class="indicators__day">20</div>
            <img
               class="imgsecondsection"
               src="../assets/img/thunderstorm-showers.png"
               alt=""
            >
            <div class="indicators__degree">13&#176;</div>
         </div>
      </div>
   </div>   
</template>

<style lang="scss">
.indicators {
   padding: 15px 20px;
   font-size: 22px;
   
   border-radius: 15px;
   margin: 0px 50px 50px 50px;
   display: grid;
   grid-template-columns: 1fr 5fr;
   
   

   &__firstsection {
      background-color: inherit;
      border-right: 4px solid white;
      display: grid;
      gap: 15px;
   }

   &__blocksgrid {
      display: grid;
      grid-template-columns: 1fr 4fr;
      background-color: inherit;
      align-items: center;
      color: white;
   }

   &__alltitle {
      background-color: inherit;
   }

   &__title {
      background-color: inherit;
      font-size: 38px;
   }

   &__subtitle {
      background-color: inherit;
   }

   &__secondsection {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      background-color: inherit;
   }

   &__secondblocksgrid {
      text-align: center;
      background-color: inherit;
      display: flex;
      flex-direction: column;
      padding: 20px 10px 20px 10px;
   }

   &__day {
      background-color: inherit;
      font-size: 38px;
   }

   &__degree {
      background-color: inherit;
      font-size: 38px;
   }
}

.imgfirstsection {
   background-color: inherit;
}

.imgsecondsection {
   background-color: inherit;
   width: 100%;
   height: 70%;
}
</style>