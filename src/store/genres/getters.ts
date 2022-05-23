import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {Genre, GenresState} from 'src/store/genres/state';

const getters: GetterTree<GenresState, StateInterface> = {
  getGenres (state: GenresState) {
    return state.genres;
  },
  getGenreName(state: GenresState) {
    return (id: number) => state.genres.find((genre: Genre) => genre.id === id)?.name ?? '';
  }
};

export default getters;
