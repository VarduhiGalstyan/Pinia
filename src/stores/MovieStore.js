import { defineStore, setActivePinia } from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [],
        activTab: 2,
    }),
    getters:{
        watchedMovies(){
            return this.movies.filter((el) => el.isWatched);
        },
        totalCountMovies(){
            return this.movies.length
        }
    },
    actions: {
        setActiveTab(id) {
            this.activTab = id;
        },
        toggleWatched(id) {
            const idx =this.movies.findIndex(el => el.id === id);            
            this.movies[idx].isWatched = !this.movies[idx].isWatched;
        },
        deleteMovie(id) {
            this.movies = this.movies.filter(el => el.id !== id)
        }
    }
});