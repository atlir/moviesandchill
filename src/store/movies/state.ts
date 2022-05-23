import {Genre} from 'src/store/genres/state';

export interface Movie {
  id: string,
  backdropPath: string,
  posterPath: string,
  title: string,
  vote_average: number,
  overview: string,
  genre_ids: number[],
  genres: Genre[],
  release_date: string,
  popularity: number,
}

export interface MoviesState {
  movies: Movie[],
  current: Movie | null,
  topRated: Movie[],
  searchResults: Movie[],
  searchPage: number,
  totalPages: number,
}


function state(): MoviesState {
  return {
    movies: [],
    current: null,
    topRated: [],
    searchResults: [],
    searchPage: 1,
    totalPages: 0,
  };
}

export default state;
