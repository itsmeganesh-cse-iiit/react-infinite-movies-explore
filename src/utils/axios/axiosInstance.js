import axios from 'axios';
import { APP_MAIN_PATH } from '../../api/apis'

//  Creating an Instance from axios to inject the common base url
export const axiosInstance = axios.create({
  baseURL: APP_MAIN_PATH,
});

// Intercept the response and if the reponse is Internal Server error(500) redirect the 
// user to the home page
axiosInstance.interceptors.response.use(
  res => res,
  err => {
    // If Internal server error we are redirecting the url to home
    if (err.response.status === 500) {
      window.location = "/"
    }
    throw new Error(err.response.data.message);
  }
)