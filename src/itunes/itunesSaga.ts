import { put, takeLatest } from 'redux-saga/effects';
import { loadedMovies, searchMovies } from './itunesSlice';
import * as yup from 'yup';
import { PayloadAction } from '@reduxjs/toolkit';

const movieSchema = yup
  .object({
    artistName: yup.string().defined(),
    trackName: yup.string().defined(),
    artworkUrl100: yup.string().defined(),
    trackId: yup.number().defined(),
  })
  .defined();

export type Movie = yup.InferType<typeof movieSchema>;

async function fetchMovies(searchTerm: string) {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&entity=movie`
  );
  const data = await response.json();

  const responseSchema = yup.object({
    resultCount: yup.number().defined(),
    results: yup.array(movieSchema),
  });

  const { results } = await responseSchema.validate(data);
  return results;
}

function* onSearchMovies({
  payload: { searchTerm },
}: PayloadAction<{ searchTerm: string }>) {
  const movies = yield fetchMovies(searchTerm);
  yield put(loadedMovies(movies));
}

export function* itunesSaga() {
  yield takeLatest(searchMovies.type, onSearchMovies);
}
