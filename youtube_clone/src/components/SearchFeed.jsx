import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed(props) {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowy: "auto", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {searchTerm} <span style={{ color: "#fc1503" }}>Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
