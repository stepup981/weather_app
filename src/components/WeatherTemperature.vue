<script>
import { mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters(["getWeatherMain"])
   },
};
</script>

<template>
   <div>
      <div v-for="(item, index) in getWeatherMain.forecast" :key="index">
         <div class="temperature" v-if="index === 0">
            <div class="temperature__degree">
               {{ Math.round(item.temp) }}&deg;
            </div>
            <div class="temperature__weather">
               {{ item.info }}
            </div>
            <div class="search__error" v-if="getError">
               No results found!
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
.temperature {
   text-align: center;
   display: flex;
   flex-direction: column;

   &__degree {
      font-size: 9rem;
   }

   &__weather {
      font-size: 3.5rem;
      padding-right: 40px;
      padding-bottom: 15px;
   }
}
</style>