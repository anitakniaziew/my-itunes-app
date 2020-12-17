import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';
import type { Movie } from './itunesSaga';

export type ITunesState = {
  movies: Movie[];
};

const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    movies: [],
  } as ITunesState,
  reducers: {
    searchMovies(state, action: PayloadAction<{ searchTerm: string }>) {
      // side effects
    },
    loadedMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { searchMovies, loadedMovies } = itunesSlice.actions;

export const selectMovies = (state: StoreState) => state.itunes.movies;

export const itunesReducer = itunesSlice.reducer;
