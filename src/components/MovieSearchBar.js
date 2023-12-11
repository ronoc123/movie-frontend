import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

const MovieSearchBar = ({ onSearch, getPopularMovies, query, setQuery }) => {
  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getPopularMovies();
      handleSearch();
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      style={{
        background: "darkgrey",
        color: "white",
      }}
    >
      <InputBase
        placeholder="Search for movies..."
        inputProps={{ "aria-label": "search for movies" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton
        type="button"
        onClick={() => getPopularMovies()}
        sx={{ p: "10px" }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default MovieSearchBar;
