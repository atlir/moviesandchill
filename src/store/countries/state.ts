export interface Country {
  id: string,
  name: string,
}

export interface CountriesState {
  countries: Country[]
}

function state(): CountriesState {
  return {
    countries: []
  };
}

export default state;
