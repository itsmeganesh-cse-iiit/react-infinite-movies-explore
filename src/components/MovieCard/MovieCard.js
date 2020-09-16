import React from "react";
import "./MovieCard.css";
import { Route } from 'react-router-dom'
import { IMAGE_BASE_URL } from '../../api/apis'
import NO_POSTER_IMG from '../../assets/images/no-poster.jpeg'
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: `${IMAGE_BASE_URL}${props.data.poster_path}`,
      isImgError: false,
    }
  }
  onError = () => {
    this.setState({
      src: NO_POSTER_IMG
    })
  }
  render() {
    const { release_date, original_title, _id } = this.props.data;
    const { src } = this.state
    return (
      <Route render={({ history }) => (
        <div className="movie-card" onClick={() => history.push(`/movies/${_id}`)}>
          <div className="movie-card-image" >
            <img src={src} alt="No Poster Img" onError={this.onError} />
          </div>
          <div className="movie-title">
            {original_title}
          </div>
          <div className="movie-release">{release_date}</div>
        </div>
      )} />
    );
  }
}

MovieCard.propTypes = {
  data: PropTypes.object
};

MovieCard.defaultProps = {
  data: {
    release_date: "",
    original_title: "",
    poster_path: "",
    _id: ''
  }
}
export default MovieCard;


