import { axiosInstance } from "../../utils/axios/axiosInstance";
/**
 * @param  {int} dataGetCount
 * Method to fetch the movies list based on query params string 
 */
export const fetchMoviesList = (dataGetCount) => {
  return dispatch => {
    return axiosInstance.get(`/movies?p=${dataGetCount}`).then(res => {
      dispatch({
        type: 'FETCH',
        movies: res.data
      })
      return res
    }).catch(err => {
      console.log(err)
    })
  }
}
/**
 * @param  {string} movieId
 * Method to fetch the movie details based on movie unique id
 */
export const fetchMovieDetails = (movieId) => {
  return dispatch => {
    return axiosInstance.get(`/movies/${movieId}`).then(res => {
      return res.data
    }).catch(err => {
      console.log(err)
    })
  }
}