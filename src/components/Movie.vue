<template>
  <div class="movie">
    <img :scr="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.originalu_title class="movie-img">
  <div>
    <div class="movie-name">
       {{movie.originalu_title}} ({{movie.relase_data}})
    <div/> 
    <span class="movie-overview">{{movie.overview}}</span>
  </div>
  </div>
</template>

<script setup> 
 const props = definProps({
    movies:{
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
    border-radius: 10px;
}
.movie-img {
    width: 200px; 
    height: 200px; 
    object-fit: cover; 
    border-radius: 50%;
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
    color: fff; 
    background: #leb4c3;
}