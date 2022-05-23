export interface Genre {
  id: number,
  name: string,
}

export interface GenresState {
  genres: Genre[]
}

function state(): GenresState {
  return {
    genres: []
  };
}

export default state;
