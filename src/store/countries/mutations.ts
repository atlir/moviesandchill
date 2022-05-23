import { MutationTree } from 'vuex';
import {CountriesState, Country} from './state';

// eslint-disable-next-line
const countriesMapper = (item: any) => ({
  ...item,
  name: item.english_name,
  id: item.iso_3166_1,
})

const mutation: MutationTree<CountriesState> = {
  saveCountries(state: CountriesState, countries: Country[]) {
    state.countries = countries.map(countriesMapper);
  },
};

export default mutation;
