<script>
import { mapGetters } from "vuex"

export default {
   computed: {
      ...mapGetters(["getWeatherIndicators", "getWeatherMain"])
   },
   methods: {
      getWeekday(dt) {
         const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
         const date = new Date(dt * 1000); 
         const weekday = daysOfWeek[date.getDay()]; 
         return weekday;
      }
   }
};
</script>

<template>
   <div class="indicators">
         <div>
            <div class="indicators__firstsection" v-for="(item, index) in getWeatherMain.forecast" :key="index">
               <div class="indicators__blocksgrid" v-if="index === 0" >
            <img
               class="imgfirstsection"
               src="../assets/img/windspeed.png"
               alt="wind"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ item.wind }}m/s</div>
               <div class="indicators__subtitle">Wind speed</div>
            </div>
         </div>
         <div class="indicators__blocksgrid" v-if="index === 0">
            <img
               class="imgfirstsection"
               src="../assets/img/humidity.png"
               alt="humidity"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ item.humidity }}%</div>
               <div class="indicators__subtitle">Humidity</div>
            </div>
         </div>
         <div class="indicators__blocksgrid" v-if="index === 0">
            <img
               class="imgfirstsection"
               src="../assets/img/cloud.png"
               alt="clouds"
            >
            <div class="indicators__alltitle">
               <div class="indicators__title">{{ item.clouds }}%</div>
               <div class="indicators__subtitle">Cloudiness</div>
            </div>
         </div>
            </div>
         
      </div>
      
      

      
      <div class="indicators__secondsection" >
         <div v-for="(item, index) in getWeatherMain.forecast" :key="index">
            <div class="indicators__secondblocksgrid" v-if="index !== 4">
               <div class="indicators__day">{{ getWeekday(item.dt) }}</div>
               <img 
                  class="imgsecondsection" 
                  :src="'http://openweathermap.org/img/w/' + item.icon + '.png'" 
                  alt="Weather Icon"
               >
               <div class="indicators__degree">{{Math.round(item.temp)}}&deg;</div>
            </div>
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
      display: flex;
      justify-content: space-between;
      background-color: inherit;
   }

   &__secondblocksgrid {
      text-align: center;
      background-color: inherit;
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
   width: 50%;
   height: 70%;
}

</style>