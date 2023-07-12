<script>
   export default {
      
   }
</script>

<template>
   <div class="indicators">
      <div class="indicators__sectionfirst">
         
         <img class="img" src="../assets/img/windspeed.png" alt="">
         <div class="indicators__title">
            3 м/s
            <div class="indicators__subtitle">Wind speed</div>
         </div>
         
         <img class="img" src="../assets/img/humidity.png" alt="">
         <div class="indicators__title">
            40%
               <div class="indicators__subtitle">
               Humidity
               </div>
         </div>

         <img class="img" src="../assets/img/barometr.png" alt="">
         <div class="indicators__title">
            750mm
            <div class="indicators__subtitle">
            Pressure
         </div>
         
         </div>
      

      </div>
   </div>   
</template>

<style lang="scss">
.indicators {
   padding: 5px 20px;
   font-size: 26px;
   background-color: rgba(43, 121, 193, 1);
   border-radius: 15px;
   margin: 0px 30px 30px 30px;
   display: grid;
   grid-template-columns: 1fr 1fr;

   &__sectionfirst {
      border-right: 4px solid white;
      background-color: inherit;
      margin-right: 400px;
      display: grid;
      grid-template-columns: 1fr 1fr;
   }

   &__title {
      font-size: 48px;
      background-color: inherit;
   }

   &__subtitle {
      background-color: inherit;
      font-size: 26px;
      transform: translate(0, -55%);
      
   }
}

.img {
   background-color: inherit;
   float: left;
   padding-top: 55px;
}

</style>