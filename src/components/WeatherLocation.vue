<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: this.$store.state.search
    };
  },
  computed: {
    ...mapGetters(["isSearched", "getWeatherCountry", "getError"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.search);
    }
  }
};
</script>

<template>
   <div class="location">
      <div class="location__blockcity">
         <div class="location__city">Kirov</div>
         <div class="location__change">
            <div 
               
               class="location__mylocation"
               >
               My location
            </div>
            <div class="location__stick"></div>
            <div class="location__changelocation">Change city</div>
         </div>
      </div>
      <div class="search">
         <input 
         type="text" 
         placeholder="Enter your location"
         v-model.trim="search"
         @keydown.enter="getData"
         >
         <button></button>
      </div>
   </div>
</template>

<style lang="scss">
.location {
   padding: 20px 0px 0px 50px;
   font-size: 1.3rem;
   display: grid;
   grid-template-columns: 3.5fr 1fr;

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
      padding-left: 23px;
      cursor: pointer;
      background-image: url(../assets/img/mylocimg.png);
      background-repeat: no-repeat;
      background-position: left;
   }

   &__stick {
      background: white;
      width: 1.5px;
      height: 13px;
   }

   &__changelocation {
      padding-left: 8px;
      cursor: pointer;
   }
}
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
   &::placeholder {
      color: fade(black, 60);
   }
}

input {
   border-radius: 15px;
   padding: 10px 0px 10px 30px;
   background-color: inherit;
   font-size: 22px;
   outline: none;
   border: 0;
   background-image: url(../assets/img/distance.png);
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
   background-image: url(../assets/img/search.png);
   background-position: center;
   background-repeat: no-repeat;
   cursor: pointer;
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