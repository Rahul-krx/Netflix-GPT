import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
    nowPlayingMovies : null,
    trailerVideo : null,
    nowPopularMovies : null,
    nowTopRatedMovies : null,
    },

    reducers:{
    addNowPlayingMovies : (state, action) =>{
        state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo :(state, action) =>{
        state.trailerVideo = action.payload;
    },
    addnowPopularMovies :(state, action) =>{
        state.nowPopularMovies = action.payload;
    },
    addnowTopRatedMovies: (state, action) =>{
        state.nowTopRatedMovies  = action.payload;
    }
},

});
export const {addNowPlayingMovies, addTrailerVideo, addnowPopularMovies, addnowTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;