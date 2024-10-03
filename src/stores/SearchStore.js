import {defineStore} from 'pinia'
import { useMovieStore } from './MovieStore';
const url = "https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore("seachStore", {
  state: ()=> ({
    loader:false,
    movies: [],
  }),
  actions: {
    async getMovies(search){
        const res = await fetch(`${url}${search}`);
        const data = await res.json();
        this.movies = data.results;
        this.loader = false;
    },
    addToUseMovies(object) {
        console.log(object);
        const movieStore = useMovieStore();
        movieStore.movies.push({...object , isWatched: false });
        movieStore.activeTab = 1;
    },
  },
});