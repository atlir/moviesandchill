import { MutationTree } from 'vuex';
import {Genre, GenresState} from './state';

const mutation: MutationTree<GenresState> = {
  saveGenres(state: GenresState, genres: Genre[]) {
    state.genres = genres;
  },
};

export default mutation;
