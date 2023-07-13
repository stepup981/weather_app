<script>
   export default {
      name: "MySearch",
      props: {
         show: {
            type: Boolean,
            default: false
         }
      },
      methods: {
         hideDialog() {
            this.$emit('update:show', false)
         }
      }
   }
</script>

<template>
   <div class="search" v-if="show" @click="hideDialog">
      <input type="text" placeholder="Enter your location">
      <button></button>
   </div>
</template>

<style lang="scss">
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
   margin-left: 30px;

}

input {
   border-radius: 15px;
   padding: 10px 0px 10px 30px;
   background-color: inherit;
   font-size: 22px;
   outline: none;
   border: 0;
   background-image: url(../../assets/img/distance.png);
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
   background-image: url(../../assets/img/search.png);
   background-position: center;
   background-repeat: no-repeat;
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