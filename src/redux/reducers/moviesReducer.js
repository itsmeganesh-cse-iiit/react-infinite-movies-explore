let initialState = {
  movies: [],

}
/**
 * @param  {object} state
 * @param  {object} action
 * Movie Reducer to hold the movies data
 */
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        movies: [...state.movies, ...action.movies]
      };
    default:
      return state;
  }
};
export default moviesReducer;
