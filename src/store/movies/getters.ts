import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {Movie, MoviesState} from './state';
import getRandomArrayItem from 'src/services/getRandomArrayItem';

const getters: GetterTree<MoviesState, StateInterface> = {
  homeMovie: (state: MoviesState): Movie|null => {
      if (state.topRated.length > 0) {
        return getRandomArrayItem(state.topRated);
      }
      return null;
    },
  searchResults: (state: MoviesState): Movie[] => {
    return state.searchResults;
  },
  searchPage: (state: MoviesState): number => {
    return state.searchPage;
  },
  totalPages: (state: MoviesState): number => {
    return state.totalPages;
  }
};

export default getters;
