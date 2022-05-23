import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import api from 'src/services/api';
import {AxiosResponse} from 'axios';
import {GenresState} from 'src/store/genres/state';

const actions: ActionTree<GenresState, StateInterface> = {
  loadGenres ({ commit }): void {
    api.get('genre/movie/list')
      .then((res: AxiosResponse) => {
        commit('saveGenres', res.data.genres)
      })
      .catch((error: Error) => {
        throw new Error(`API ${error}`);
      })
  }
};

export default actions;
