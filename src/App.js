import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { fetchMoviesList } from "./redux/actions/moviesActions";
import MovieDetails from './components/MovieDetails/MovieDetails'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state.movies }
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviesList: (dataGetCount) => dispatch(fetchMoviesList(dataGetCount))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
