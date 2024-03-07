import React from "react";
import Sidebar from "./Sidebar";
import TrendingNow from "./TrendingNow";

const Bottom = () => {
  return (
    <div className=" flex w-full ">
      <Sidebar />
      <TrendingNow />
    </div>
  );
};

export default Bottom;
