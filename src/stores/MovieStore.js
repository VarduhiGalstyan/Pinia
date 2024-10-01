import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [{
            id: 1,
            original_title: "Spider-Man",
            overview: "After being bitten by a genetically altered spider at 0scorp, nerdy but ...",
            poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPT.jpg",
            release_data: "2002-05-01",
            isWatched: false,
        },
        {
            id: 2,
            original_title: "The Batman",
            overview: "In his second year ...",
            poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
            release_data: "2022-03-01",
            isWatched: true,
        },
    
        ],
    }),
});