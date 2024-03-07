import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation, useParams } from "react-router-dom";

const Songdetail = () => {
  const { id } = useParams();
  const [song, setsong] = useState("");
  const [link, setlink] = useState("");
  const getSong = async () => {
    try {
      const { data } = await axios.get(`https://saavn.dev/albums?id=${id}`);
      setsong(data.data.songs[0].downloadUrl[2].link);
    } catch (error) {
        console.log(error.message);
    }
};
  useEffect(() => {
    getSong();
  }, []);
  return (
  <h1>fdjlsdkflk</h1>
  );
};

export default Songdetail;
