import React from "react";
import "../../styles.css";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import Header from '../Header/Header'
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchMoviesList,fetchMovieDetails } from "../../redux/actions/moviesActions";
import HomeShimmer from './Shimmer'
class Home extends React.Component{
    dataGetCount=0
    fetchMoreMoviess = () => {
      this.props.fetchMoviesList(++this.dataGetCount)
    };
  
    componentDidMount(){
        this.props.fetchMoviesList(++this.dataGetCount)
      }
    componentDidUpdate(prevProps,prevState){
      if(prevProps.movies!==this.props.movies){
        this.setState({
          items:this.props.movies
        })
      }
    }
    render(){
      const {movies} =this.props
      if(movies.length===0){
        return <HomeShimmer/>
      }
        return (
            <div className="App">
            <Header title="Explore Movies"/>
               <InfiniteScroll
               dataLength={this.props.movies.length}
               next={this.fetchMoreMoviess}
               hasMore={true}
               loader={<h4>...</h4>}
               scrollThreshold={0.6}
             >
                <div className="movie-cards">
               {this.props.movies.map((data, index) => (
                   <MovieCard data={data} {...this.props}/>
               ))}
               </div>
             </InfiniteScroll>
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      ...state.movies
    }
   };
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviesList:(dataGetCount)=>dispatch(fetchMoviesList(dataGetCount)),
    fetchMovieDetails:(movieId)=>dispatch(fetchMovieDetails(movieId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
   