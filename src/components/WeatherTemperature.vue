<script>
import { mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters(["getWeatherMain"])
   }
};
</script>

<template>
   <div
      v-if="getWeatherMain.temp"
      class="temperature"
   >
      <div class="temperature__degree">
         {{ Math.round(getWeatherMain.temp) }}&deg; 
      </div>
      <div class="temperature__weather">
         {{ getWeatherMain.info }}
      </div>
   </div>
</template>

<style lang="scss">
.temperature {
   text-align: center;

   &__degree {
      font-size: 10rem;
   }

   &__weather {
      font-size: 3.8rem;
      padding-right: 40px;
      padding-bottom: 15px;
   }

   &__img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;

   }
}


</style>