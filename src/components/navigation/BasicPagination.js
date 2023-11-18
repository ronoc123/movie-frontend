import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ pages, getPopularMovies, setPage }) {
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      spacing={2}
      style={{
        // background: "white",
        marginTop: "2rem",
        padding: ".5rem",
        justifyContent: "center", // Center the Pagination component
        alignItems: "center",
      }}
    >
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handlePageChange}
        sx={{
          backgroundColor: "#2B2D31",
          padding: ".5rem",
          borderRadius: ".5rem",
          "& .MuiPaginationItem-root.Mui-selected": {
            color: "black",
            backgroundColor: "darkgrey",
            borderColor: "darkgrey",
            "&:hover": {
              backgroundColor: "lightgrey", // Add your hover color here
              color: "black", // Add your hover text color here
            },
          },
          "& .MuiPaginationItem-root": {
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey", // Add your hover color here
              color: "black", // Add your hover text color here
            },
          },
        }}
      />
    </Stack>
  );
}
