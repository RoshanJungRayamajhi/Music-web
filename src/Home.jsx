import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Newrelease from "./Components/Newrelease";
import Editorial from "./Components/Editorial";
import { Route, Router, Routes, useParams } from "react-router-dom";
import Songdetail from "./Components/Songdetail";
import Sidebar from "./Components/Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addsong, removesong } from "./utilis/songdetails";
import ReactAudioPlayer from "react-audio-player";

const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [song, setsong] = useState("");
  const [link, setlink] = useState("");
  const getSong = async () => {
    try {
      const { data } = await axios.get(`https://saavn.dev/albums?id=${id}`);
      setsong(data.data.songs[0]);
      console.log(data.data.songs[0]);
    } catch (error) {
      console.log(error.message);
    }
  };
  song && dispatch(addsong(song));
  useEffect(() => {
    getSong();
    return () => {
      dispatch(removesong());
    };
  }, [id]);
  const song1 = useSelector((store) => store.song.info);

  return (
    <>
      <div className=" w-full min-h-screen bg-zinc-700">
        <Navbar />
        <Bottom />
        <Newrelease />
        <Editorial />
        {id && (
          <div className=" fixed bottom-8   w-[60%] h-10 text-white px-2 py-[2%] flex items-center justify-start ">
            <div className=" bg-red-400 h-24 w-40 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src={`${song1?.image[1]?.link}`}
                alt=""
              />
            </div>
            <ReactAudioPlayer
              className=" w-[20vw] rotate-[-90deg] -ml-[11%] mb-[20%] "
              src={song1?.downloadUrl[3]?.link}
              autoPlay
              controls
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
