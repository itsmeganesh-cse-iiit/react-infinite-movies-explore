import React from "react";
import "./MovieDetails.css";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../redux/actions/moviesActions";
import { IMAGE_BASE_URL } from '../../api/apis'
import BackButton from '../BackButton/BackButton'
import Loader from '../MovieDetails/Shimmer'
import PropTypes from 'prop-types';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: {
        poster_path: ''
      },
      loading: true
    }
  }
  componentDidMount() {
    const { movieId } = this.props.match.params
    this.props.fetchMovieDetails(movieId).then(res => {
      this.setState({
        movieData: res ? res[0] : this.state.movieData,
        loading: false
      })
    })
  }
  render() {
    const { loading } = this.state
    const { history } = this.props
    if (loading) {
      return <Loader screen="large-screen" />
    }
    const { poster_path, title, vote_count, vote_average, runtime, overview, release_date, genres } = this.state.movieData
    // Render set will hold set of array of array which holds the presentation data label and value
    let Cast = () => <><div>Iron Man</div><div>Thor</div><div>Hulk</div><div></div></>
    let Writer = () => <><div>Christopher Nolan</div><div>James Cameron</div></>
    let render_set = [
      [
        {
          label: "Release Date",
          value: release_date
        },
        {
          label: "Cast",
          value: <Cast />

        },
        {
          label: "Writer",
          value: <Writer />
        }],
      [
        {
          label: "Genres",
          value: genres && JSON.parse(genres.replace(/'/g, '"')).map(genre => (
            <div>{genre.name}</div>
          ))
        },
        {
          label: "Type",
          value: "Action"
        },
      ],
      [
        {
          label: "Vote Count",
          value: vote_count
        },
        {
          label: "Maturity Ratings",
          value: "13+"
        }
      ]
    ]
    console.log("re", render_set)
    return <div className="movie-details-area" style={{ backgroundImage: `url(${IMAGE_BASE_URL}${poster_path})` }}>
      <div className="test-area">
        <div className="container">
          <div className="back-button"><BackButton history={history} /></div>
          <div className="title">{title}</div>
          <div className="mv-info">
            <div>{vote_average}</div>
            <div>{release_date && release_date.split("-")[0]}</div>
            <div>{runtime}m</div>
          </div>
          <div className="mv-desc">{overview}</div>
          <div className="mv-head-div">
            {render_set.map((each, index) => <MovieInfoComp data={each} key={index} />)}
          </div>
        </div>

      </div>
    </div>
  }
}

MovieDetails.propTypes = {
  history: PropTypes.object
};

MovieDetails.defaultProps = {

}

const MovieInfoComp = (props) => {
  return <div className="mv-head-info">
    {props.data.map((each, index) => <><div className="mv-label">{each.label}</div><div>{each.value}</div></>)}
  </div>
}

const mapDispatchToProps = (dispatch) => {
  return { fetchMovieDetails: (movieId) => dispatch(fetchMovieDetails(movieId)) };
};
export default connect(null, mapDispatchToProps)(MovieDetails);
