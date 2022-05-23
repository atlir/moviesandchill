import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {CountriesState} from 'src/store/countries/state';

const getters: GetterTree<CountriesState, StateInterface> = {
  getCountries (state: CountriesState) {
    return state.countries;
  },
};

export default getters;
