import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Topcharts = () => {
  const [data, setdata] = useState("");
  const Getchartdata = async () => {
    const { data } = await axios.get(
      "https://saavn.dev/modules?language=hindi"
    );
    console.log(data.data);
    setdata(data.data.charts);
  };
  useEffect(() => {
    Getchartdata();
  }, []);
  return (
    <div className=" mt-[3%] w-[100%] text-zinc font-semibold pt-[3%] overflow-auto">
      <h1 className="font-semibold text-2xl pt-3">Top Charts</h1>
      <Cards data={data} />
    </div>
  );
};

export default Topcharts;
