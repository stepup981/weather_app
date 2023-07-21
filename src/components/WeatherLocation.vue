<script>
import { mapActions, mapGetters } from "vuex";

export default {
   data: () => ({
      search: '',
      isSearchVisible: false
   }),
   computed: {
      ...mapGetters(["getWeatherMain", "getError"])
   },
   mounted () {
      this.getLocationHandler();
   },
   methods: {
      ...mapActions(["fetchWeatherData"]),

      getData() {
         console.log(this.search);
         this.fetchWeatherData({ search: this.search });
      },

      toggleSearchVisibility() {
         this.isSearchVisible = !this.isSearchVisible;
      },

      getLocationHandler() {
         if (('!geolocation') in navigator) return alert('Geolocation is not supported');
         
         navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            this.fetchWeatherData({ latitude, longitude });
         });
      }
   },
};
</script>

<template>
   <div class="location">
      <div class="location__blockcity">
         <div class="location__city">{{ getWeatherMain.name }}</div>
         <div class="location__change">
            <div 
               @click="getLocationHandler" 
               class="location__mylocation"
            >
               My location
            </div>
            <div class="location__stick"></div>
            <div 
               @click="toggleSearchVisibility" 
               class="location__changelocation"
            >
               Change city
            </div>
         </div>
      </div>
      <Transition name="fade">
         <div
            v-show="isSearchVisible"
            class="search"
         >
            <input
               class="search__inploc" 
               type="text" 
               placeholder="Enter your location"
               v-model.trim="search"
               @keydown.enter="getData"
            >
            <button 
               class="search__btnloc" 
               @click="getData"
            />
            <div 
               class="search__error" 
               v-if="getError"
            >
               No results found!
            </div>
         </div>
      </Transition>
   </div>
</template>

<style lang="scss">
.location {
   padding: 20px 0px 0px 50px;
   font-size: 1.5rem;

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

   &__inploc {
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

   &__btnloc {
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

   &__error {
      background-color: inherit;
      font-size: 1rem;
      color: rgb(201, 236, 1);
   }
}

::placeholder {
   color: white;
   opacity: 1;
}

:-ms-input-placeholder {
   color: white;
}

::-ms-input-placeholder {
   color: white;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>