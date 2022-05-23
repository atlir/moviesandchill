import {ActionTree} from 'vuex';
import { StateInterface } from '../index';
import {AxiosResponse} from 'axios';
import api from './../../services/api'
import {MoviesState} from 'src/store/movies/state';

const actions: ActionTree<MoviesState, StateInterface> = {
  loadTopRated ({ commit }): void {
      api.get('movie/top_rated')
        .then((res: AxiosResponse) => {
          commit('saveTopRated', res.data.results)
        })
        .catch((error: Error) => {
          throw new Error(`API ${error}`);
        })
    },

  search({ commit }, {query, isRegion, page = 1}) {
    let params = [];
     if(isRegion) {
       params = [{
         key: 'region',
         value: query
       }, {
         key: 'query',
         //API have not search only by country
         value: 'a'
       }]
     } else {
       params = [{
         key: 'query',
         value: query,
       }]
     }
     params.push({
       key: 'page',
       value: page,
     });
    api.get('search/movie', params)
      .then((res: AxiosResponse) => {
        commit('saveSearchResults', res.data)
      })
      .catch((error: Error) => {
        throw new Error(`API ${error}`);
      })
  }
};

export default actions;
