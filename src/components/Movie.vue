<template>
 <main>
  <div class="movie">
    <img :scr="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title" class="movie-img">
    <div>
       <div class="movie-name">
          {{movie.original_title}} ({{movie.relase_data}})
       </div> 
       <span class="movie-overview">{{movie.overview}}</span>
       <div class="movie-buttons">
        <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movie.id)">
          <span v-if="movie.isWatched" >Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" 
          @click="movieStore.deleteMovie(movie.id)">
          Delete
        </button>
       </div>
    </div>
  </div>
 </main>
</template>

<script setup> 
 import { useMovieStore } from '../stores/MovieStore';

 const movieStore = useMovieStore()
 const props = defineProps({
  movie:{
        type: Object,
        required: true,
        default: () => {}
    }
 })
</script>

<style lang="css" scoped>
.movie {
    display: grid; 
    grid-template-columns: 200px lfr; 
    column-gap: 30px; 
    margin-bottom: 20px; 
    border: 2px solid H H#efefef; 
    padding: 10px; 
    /* border-radius: 10px; */
}
.movie-img {
    width: 200px; 
    height: 200px; 
    object-fit: cover; 
}
.movie-name {
     display: flex; 
     align-items: center; 
     font-size: 20px; 
     margin-bottom: 20px;
}
.movie-overview {
    display: block; 
    margin-bottom: 20px;
}
.movie-buttons {
    display: flex; 
    align-itens: center; 
    justify-content: center;
}
.movie-buttons-watched {
    color: aliceblue;
    height: 25px;
    background-color: rgb(76, 104, 230);
    /* background: #fff; */
}
.movie-buttons-watched:hover{
 border-radius: 10px; 
}
.movie-buttons-delete{
  margin-left: 5px;
    color: aliceblue;
    height: 25px;
    background-color: red;
}
.movie-buttons-delete:hover{
  border-radius: 10px; 
}
</style>