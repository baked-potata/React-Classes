import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

function ChannelDetail(props) {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideos(data?.items)
    );
  }, [id]);

  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(217deg,rgba(34, 193, 195, 1) 0%,rgba(253, 187, 45, 1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-110px"
          channelId={channelDetail?.id}
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
