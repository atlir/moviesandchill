import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import api from 'src/services/api';
import {AxiosResponse} from 'axios';
import {CountriesState} from 'src/store/countries/state';

const actions: ActionTree<CountriesState, StateInterface> = {
  loadCountries ({ commit }): void {
    api.get('configuration/countries')
      .then((res: AxiosResponse) => {
        commit('saveCountries', res.data)
      })
      .catch((error: Error) => {
        throw new Error(`API ${error}`);
      })
  }
};

export default actions;
