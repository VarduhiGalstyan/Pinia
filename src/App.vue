<template>
 <main>
  <header class="header">
    <img scr ="#" alt="logo" class="header-logo">
    <h2>My Favorite Moves</h2>
  </header>  
  <div class="tabs">
    <button 
      :class="['btn', {btn_green: movieStore.activTab === 1 }]" 
      @click="setTab(1)"> 
      Favorite
    </button>
    <button 
      :class="['btn', {btn_green: movieStore.activTab === 2 }]"
      @click="setTab(2)">
      Search
    </button>
  </div>
  <div class="movies" v-if="movieStore.activTab === 1">
    <div>
      <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
      <Movie 
        v-for = "movie of movieStore.watchedMovies" 
        :key = "movie.id" 
        :movie="movie" 
      />
    </div>
    <h3>All Movies (count: {{ movieStore.movies.length }})</h3>
    <Movie 
      v-for = "movie of movieStore.movies" 
      :key = "movie.id" 
      :movie="movie" 
    />
    <!-- {{movieStore.movies}} -->
  </div>
  <div class="search" v-else>
    <Search/>
  </div>
 </main>
</template>

<script setup>
   import Search from "./components/Search.vue";
   import Movie from "./components/Movie.vue";
   import {useMovieStore} from "./stores/MovieStore";

   const setTab = (id) => {
    movieStore.setActiveTab(id);
   }

   const movieStore = useMovieStore();
  //  console.log(movieStore);
   
</script>

<style scoped>
.header{
  display: flex; 
  justify-content: center; 
  align-items: 
  center; padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px; 
}  
.btn {
  border: none; 
  width: 100px; 
  height: 40px; 
  font-size: 14px; 
  margin: 0 10px; 
  border-radius: 10px; 
  cursor: pointer;
  background: #efefef;
}
.bnt:hover{
  opacity: 0.7;
}
.btn_green{
  background: #37df5c;
}
.tabs{
  display: flex;
  justify-content: center;
  margin-button: 30px;
}
</style>
