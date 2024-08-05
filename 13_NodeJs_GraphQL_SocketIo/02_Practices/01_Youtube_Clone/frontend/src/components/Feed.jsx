import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from ".";
import { useParams } from "react-router-dom";
import { getVideosPage, getVideosType } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if(params.id) {
      getVideosType(params.id)
        .then((data) => setVideos(data))
    }
  }, [params.id]);

  useEffect(() => {
    let page = params.page ? params.page : 1;

    getVideosPage(page)
      .then((result) => {
        setVideos(result.data);
        setTotalPage(result.totalPage)
      })

  }, [params.page]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2050 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />

        {
          Array.from({ length: totalPage }, (_ , index) => {
            return (
              <button className='btn btn-primary mx-2' key={index} onClick={() => navigate(`/${ index + 1}`)}>
                { index + 1 }
              </button>
            )
          })
        }
      </Box>
    </Stack>
  );
};

export default Feed;
