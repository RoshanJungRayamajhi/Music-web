import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Newrelease = () => {
  const [data, setdata] = useState("");
  const Getnewdata = async () => {
    const { data } = await axios.get(
      "https://saavn.dev/modules?language=hindi"
    );
    console.log(data.data);
    setdata(data.data.albums);
  };
  useEffect(() => {
    Getnewdata();
  }, []);
  return (
    <div className=" pl-[20%] mt-[3%] w-[100%] text-zinc font-semibold pt-[3%] overflow-auto">
      <h1 className="font-semibold text-2xl pt-3">New Relase</h1>
      <Cards data={data} />
    </div>
  );
};

export default Newrelease;
