import React from "react";
import Wrapper from "../assests/Wrappers/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleMovie from "./SingleMovie";
import BasicPagination from "./navigation/BasicPagination";
import SingleModal from "./SingleModal";
import { defaultMovie } from "../config/config";
import MovieSearchBar from "./MovieSearchBar";

const Search = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState();
  const [singleMovie, setSingleMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [tempMovies, setTempMovies] = useState([]);
  const [query, setQuery] = useState("");

  let key = process.env.REACT_APP_MOVIES_API;

  const getPopularMovies = async () => {
    try {
      if (query === "") {
        const { data } = await axios(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
        );
        setNumPage(data.total_pages);
        setMovie(data.results);
      } else {
        const { data } = await axios.get(
          // `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=${page}
  `
        );
        setNumPage(data.total_pages);
        setMovie(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const showSingleMovie = async (id, mediaType) => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      );

      setSingleMovie(data);
      setShowModal(true);
    } catch (error) {
      setSingleMovie(defaultMovie);
      setShowModal(true);
    }
  };

  const getTempMovies = async () => {
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
      );
      setTempMovies(data.results);
      setNumPage(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [page]);

  return (
    <Wrapper>
      {showModal && (
        <SingleModal
          setShowModal={setShowModal}
          singleMovie={singleMovie}
          showSingleMovie={showSingleMovie}
        />
      )}
      <MovieSearchBar
        getPopularMovies={getPopularMovies}
        page={page}
        query={query}
        setQuery={setQuery}
      />
      {movie.length === 0 ? (
        <div
          style={{
            width: "50vw",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          <p>No Movies...</p>
        </div>
      ) : (
        <div className="content">
          {movie &&
            movie.map((item) => {
              return (
                <SingleMovie
                  key={item.id}
                  title={item.title || item.name}
                  mediaType={item.media_type || "movie"}
                  release={item.first_air_date || item.release_date}
                  rating={item.vote_average}
                  backdrop={item.backdrop_path}
                  poster={item.poster_path}
                  id={item.id}
                  showSingleMovie={showSingleMovie}
                />
              );
            })}
        </div>
      )}
      {movie.length === 0 ? (
        ""
      ) : (
        <BasicPagination
          pages={numPage}
          getPopularMovies={getPopularMovies}
          setPage={setPage}
        />
      )}
    </Wrapper>
  );
};

export default Search;
