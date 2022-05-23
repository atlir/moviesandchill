import { MutationTree } from 'vuex';
import {Movie, MoviesState} from 'src/store/movies/state';

const url = 'https://image.tmdb.org/t/p/original/';

// eslint-disable-next-line
const movieMapper = (movie: any) => ({
    ...movie,
    backdropPath: `${url}/${movie.backdrop_path}`,
    posterPath: `${url}/${movie.poster_path}`
});

const mutation: MutationTree<MoviesState> = {
  saveMovies(state: MoviesState, movies: Movie[]) {
    state.movies = movies.map(movieMapper);
  },
  saveTopRated(state: MoviesState, movies: Movie[]) {
    state.topRated = movies.map(movieMapper);
  },
  saveSearchResults(state: MoviesState, {results, page, total_pages}) {
    state.searchResults = results.map(movieMapper);
    state.searchPage = page;
    state.totalPages = total_pages;
  }
};

export default mutation;
