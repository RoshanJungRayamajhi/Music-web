import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Topcharts from "./Topcharts";
import ReactAudioPlayer from "react-audio-player";

const Mainbar = () => {
  const [data, setdata] = useState("");
  const Gethomedata = async () => {
    const { data } = await axios.get(
      "https://saavn.dev/modules?language=hindi"
    );
    console.log(data.data.albums);
    setdata(data.data.trending.albums);
  };
  useEffect(() => {
    Gethomedata();
  }, []);
  return (
    <div className="mainbar ml-[18%] mt-[3%] w-[80%] text-zinc font-semibold pl-[3%] pt-[3%] overflow-auto">
      <h1 className="font-semibold text-2xl pt-3">TrendingNow</h1>
     
      <Cards data={data} />
      <Topcharts />
    </div>
  );
};

export default Mainbar;
