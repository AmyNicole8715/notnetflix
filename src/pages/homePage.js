import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import Image from './assets/images/totallynotnetflix.png';




class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genre_ids: []
    }
  };


  componentDidMount() {
    this.loadMovies();
  };
  
  handleChange (sortGenre) {
    this.loadMovies(sortGenre);
  }

  loadMovies(sortGenre) {
    // go grab (aka get) all the data from some url
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&append_to_response=videos,images&include_image_language&with_genres=${sortGenre||""}`;
    axios.get(url)
      .then(response =>
      {
        // then put just the movies (not everything) into the state
        this.setState({movies: response.data.results});
      });

  };

  
  render() {
    // let movies = [];
    // for(let i = 0; i < this.state.movies.length; i++)
    // {
    //   movies.push(<h2>{this.state.movies[i].title}</h2>)
    // }

    return (
      
      <div className="App">
        <Navbar bg="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home">
            <img 
              src={Image} 
              width="100"
              height="100"
              className="logo"
              alt="Totally Not Netflix logo"
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Sort by">
              <Dropdown.Item onClick={() => this.handleChange(28)}>Action</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleChange(35)}>Comedy</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleChange("")}>Popularity</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Navbar>
        

        <div className="containmovie">
        {this.state.movies.map(movie =>
          {
          return(
              <div className="image">
                <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} alt={'poster image for ' + movie.title} className="posterimage" />
                <div className="prettify posterimage"><span>{movie.title} ({movie.release_date})</span></div>
              </div>
            )
          })}
          </div>
      </div>
    );
  }
}

export default View;
