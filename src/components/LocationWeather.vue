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
            <img src="../assets/img/mylocimg.png" alt="MyLoc">
            <div class="location__mylocation">
               My location
            </div>
            <div class="location__stick">

            </div>
            <div class="location__changelocation">
               Change city
            </div>
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
   }

   &__stick {
      background: white;
      width: 1.5px;
      height: 13px;
   }

   &__changelocation {
      padding-left: 8px;
   }

}

</style>