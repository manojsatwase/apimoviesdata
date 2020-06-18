import React, { Component } from "react";


export default class Movies extends Component {
  constructor(props) {

    super(props);
    this.state = {
      query: "",
      items: [],
      isLoaded: false
    };
  }

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({ query })

  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.fetchData(this.state.query);
      this.setState({ query: "" })
    }


  }
  fetchData = (val) => {

    let searchQuery = val || "avengers"

    // console.log(this.handleKeyPress)
    const API_KEY = "c0c27d0ce6ae24581f452d663a20688b";
    const MOVIE_ENDPOINT = "https://api.themoviedb.org";
    const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&=en-US&query=${searchQuery}`;


    fetch(MOVIE_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      });
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {

    let { isLoaded, items } = this.state;
    let data = { ...items.results };
    const movies = [];
    for (let item in data) {
      // console.log(data[item]);
      let imgagePath = `http://image.tmdb.org/t/p/w500/${data[item].poster_path}`;
      let obj = {
        image: imgagePath,
        title: data[item].title,
        release_date: data[item].release_date,
        original_language: data[item].original_language,
        overview: data[item].overview
      };
      movies.push(obj);
    }

    if (!isLoaded) {
      return <div className="loading">...Loading</div>;
    }

    return (

      <React.Fragment>
        <div className="container__div">
          <label htmlFor="search-input" className="search-label">
            <input type="text"
              name="query"
              value={this.state.query}
              id="search-input"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Search..."
            />
            <i className="fa fa-search" aria-hidden="true" />
          </label>
        </div>
        <section className="container-fluid">
          <div className="row">
            {movies.map((movie, index) => {

              return (

                <div className="card col-sm-12 col-md-3 movies mx-2 mt-5" key={index}>
                  <div className="movies__item ">
                    <img
                      src={movie.image}
                      alt="movie poster"
                      className="movies__image"
                    />
                    <p className="movies__title"><span style={{ fontWeight: "bold" }}>Title : {movie.title}</span></p>
                    <h4>Release Date : {movie.release_date}</h4>
                    <h5> Original_language : {movie.original_language}</h5>

                  </div>

                </div>

              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
