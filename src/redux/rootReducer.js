import { combineReducers } from "redux";
import moviesReducer from "./reducers/moviesReducer";

//  Combining the reducers if we have many
export default combineReducers({
  movies: moviesReducer
});
