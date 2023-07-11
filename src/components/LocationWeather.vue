<script>
   export default {
      
   }
</script>

<template>
   <div class="location">
      <div class="location__city">
         City
      </div>
         <div class="location__mylocation">
            My location
         </div>
         <div class="location__changelocation">
            Change city
         </div>
   </div>
</template>

<style lang="scss">
.location {
   padding: 80px 0px 0px 80px;
   font-size: 24px;
   display: grid;
   grid-template-columns: 150px 150px;

   &__city {
      font-size: 64px;
      text-align: left;
      grid-column: 1;
      grid-row: 1;
   }

   &__mylocation {
      grid-column: 1;
      grid-row: 2;
   }

   &__changelocation {
      grid-column: 2;
      grid-row: 2;
   }
}

</style>