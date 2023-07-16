<script>
   export default {
      name: "TheTemperature",
   }
</script>

<template>
   <div class="temperature">
      <div class="temperature__degree">
         20&#176;
      </div>
      <div class="temperature__weather">
         clear
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
      padding-right: 30px;
      padding-bottom: 15px;
   }
}

</style>