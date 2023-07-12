<script>
   export default {
      
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
   // display: flex;
   // flex-direction: column;
   // align-items: center;
   display: grid;
   text-align: center;
   // padding-top: 10px;
   transform: translate(0, -10%);

   &__degree {
      font-size: 180px;
      padding-left: 50px;
   }

   &__weather {
      transform: translate(0, -100%);
      font-size: 60px;
   }
}

</style>