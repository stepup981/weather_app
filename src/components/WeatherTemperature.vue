<script>
   import { mapGetters } from "vuex";

export default {
   data() {
      return {};
   },

   computed: {
      ...mapGetters(["getWeatherMain"])
   }
};
</script>

<template>
   <div class="temperature">
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
}

</style>