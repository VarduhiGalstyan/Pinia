import { defineStore, setActivePinia } from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [{
            id: 1,
            original_title: "Spider-Man",
            overview: "After being bitten by a genetically altered spider at 0scorp, nerdy but ...",
            poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPT.jpg",
            release_data: "2002-05-01",
            isWatched: true,
        },
        {
            id: 2,
            original_title: "The Batman",
            overview: "In his second year ...",
            poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
            release_data: "2022-03-01",
            isWatched: false,
        },
        ],
        activTab: 1,
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