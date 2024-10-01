<template>
  <header class="header">
    <img scr ="#" alt="logo" class="header-logo">
    <h2>My Favorite Moves</h2>
  </header>  
  <div class="movies">
    <h3>All Movies</h3>
    <Moves v->
    {{movieStore.movies}}
  </div>
</template>

<script setup>
   import {useMovieStore} from './stores/MovieStore'
   import Movie from './components/Movie.vue'

   const movieStore =  useMovieStore();
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
  margin-button: 30px
}
</style>
