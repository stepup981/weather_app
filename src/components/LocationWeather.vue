<script>
   import { API_KEY, BASE_URL} from './const'

   // function getWeather() {
   //    fetch(`${BASE_URL}?q={city.value}&appid=${API_KEY}`)
   //       .then((response) => response.json() )
   //       .then((data) => weatherInfo.value = data)
   // }     

   export default {
      name: "LocationWeather",
      data: () => ({
         city: 'Kirov',
         weather: null
      }),
      methods: {
         getWeather() {
            fetch(`${BASE_URL}?q={city.value}&appid=${API_KEY}`)
               .then((response) => response.json() )
               .then((data) => weather.value = data)
   //       getLocation() {
   //          navigator.geolocation.getCurrentPosition((position) => {
   //             if (navigator.geolocation) {
   //                this.position = position.coords;
   //             return;
   //             } 
   //             console.log(position.coords.latitude, position.coords.longitude);
   //    // Здесь вы можете использовать полученные координаты для дальнейшей обработки
   // });
   // },

   },
   // mounted: {
   //    getWeather
   // }
}
}
</script>

<template>
   <div class="location">
      <div class="location__city" id="locationCity">Kirov</div>
      <div class="location__change">
         <!-- <img src="../assets/img/mylocimg.png" alt="MyLoc"> -->
         <div 
            @click="getWeather()" 
            class="location__mylocation"
            >
            My location
         </div>
         <div class="location__stick"></div>
         <div class="location__changelocation">Change city</div>
      </div>
      <div class="search">
         <input v-model="city" type="text" placeholder="Enter your location">
         <button></button>
      </div>
   </div>
</template>

<style lang="scss">
.location {
   padding: 20px 0px 0px 50px;
   font-size: 1.3rem;

   &__city {
      font-size: 3.8rem;
   }

   &__change {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      opacity: 0.7;
   }

   &__mylocation {
      padding-right: 8px;
      padding-left: 23px;
      cursor: pointer;
      background-image: url(../assets/img/mylocimg.png);
      background-repeat: no-repeat;
      background-position: left;
   }

   &__stick {
      background: white;
      width: 1.5px;
      height: 13px;
   }

   &__changelocation {
      padding-left: 8px;
      cursor: pointer;
   }
}
.search {
   background-color: rgba(43, 121, 193, 1);
   border-radius: 40px;
   text-align: left;
   color: white;
   padding: 20px 20px;
   max-width: 350px;
   display: grid;
   grid-template-columns: 1fr 0.3fr;
   align-items: center;
}

input {
   border-radius: 15px;
   padding: 10px 0px 10px 30px;
   background-color: inherit;
   font-size: 22px;
   outline: none;
   border: 0;
   background-image: url(../assets/img/distance.png);
   background-position: left;
   background-repeat: no-repeat;
}

button {
   border: 0;
   outline: 0;
   padding: 10px 10px;
   border-radius: 50px;
   height: 50px;
   width: 50px;
   background-image: url(../assets/img/search.png);
   background-position: center;
   background-repeat: no-repeat;
   cursor: pointer;
}

img {
   background-color: inherit;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: white;
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
   color: white;
}


</style>