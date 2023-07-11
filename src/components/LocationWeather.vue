<script>
   export default {
      
   }
</script>

<template>
   <div class="location">
      <div class="location__city">
         Kirov
      </div>
         <div class="location__change">
            <div class="location__mylocation">
               <img src="../assets/img/mylocimg.png" alt="MyLoc" style="float:left;">
               My location
            </div>
            <div class="location__changelocation">
               Change city
            </div>
         </div>
   </div>
</template>

<style lang="scss">
.location {
   padding: 30px 0px 0px 50px;
   font-size: 20px;

   &__city {
      font-size: 64px;
   }

   &__change {
      padding-top: 8px;
      display: flex;
      justify-content: flex-start;
      opacity: 0.7;
      gap: 8px;
   }

   &__mylocation {
      border-right: 2px solid white;
      padding-right: 8px;
   }
}

</style>