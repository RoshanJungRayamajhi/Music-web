import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const { id } = useParams();
  const [query, setquery] = useState("");
  const [song, setsong] = useState("");
  const searchsong = async () => {
    try {
      const { data } = await axios.get(
        `https://saavn.dev/search/songs?query=${query}&page=1&limit=10`
      );
      console.log(data);
      setsong(data.data.results);
      console.log(song);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    searchsong();
  }, [query]);
  return (
    <div className="navbar fixed top-0 left-0  h-[10vh] w-full p-3 bg-purple-400 flex gap-14">
      <div className="w-32">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 111 32"
          xml:space="preserve"
        >
          <path
            fill="#1ECCB0"
            d="M0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16c0-8.8-7.2-16-16-16C7.2,0,0,7.2,0,16z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M13.8,25.1c-0.6-1-1.4-1.9-2.4-2.5s-2-1.1-3.2-1.4H8.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.2c1.3,1.9,3.3,3.3,5.5,3.9h0.1c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.2C13.9,25.2,13.9,25.1,13.8,25.1L13.8,25.1z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M25.6,13.3c0,0,0-0.1,0-0.1c-0.5-1.8-1.5-3.4-2.9-4.6c-1.4-1.2-3-2.1-4.8-2.4h-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v0.1c0.9,5.5,0.3,11.1-1.7,16.3c0,0.1-0.1,0.1-0.1,0.2s-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0-0.2c0,0-0.1-0.7-0.1-1c-0.6-4.8-2-9.4-4.3-13.7c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1s-0.1,0-0.2,0C10.1,8,10.1,8,10,8l0,0c-1.4,1.1-2.5,2.5-3.2,4.2c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.2,0.2c2.2,1.4,4,3.2,5.3,5.5c1.3,2.2,2,4.8,2.1,7.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.2,0.1c0.2,0,0.5,0.1,0.7,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0.5-2.6,1.6-5.1,3.3-7.2c1.7-2.1,3.8-3.7,6.3-4.8c0.1,0,0.1-0.1,0.2-0.1C25.6,13.4,25.6,13.4,25.6,13.3z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M24.7,20.9c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1h-0.1c-3.1,0.7-5.9,2.4-7.9,4.8c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1l0,0c1.6-0.1,3.2-0.6,4.6-1.4s2.6-2,3.4-3.4C24.7,21.1,24.7,21,24.7,20.9L24.7,20.9z"
          ></path>
          <path d="M40.3,22c-0.8,0-1.6-0.1-2.3-0.5c-0.6-0.3-1.1-0.8-1.5-1.4C36.2,19.4,36,18.7,36,18v-0.3h2.8c0,0.5,0.1,0.9,0.3,1.3c0.2,0.2,0.6,0.4,0.9,0.4s0.7,0,1-0.2c0.2-0.1,0.3-0.4,0.4-0.6c0.1-0.3,0.1-0.6,0.1-0.9V9.2h3.1v8.4c0.1,1.2-0.3,2.4-1.1,3.3c-0.4,0.4-1,0.7-1.5,0.9C41.4,21.9,40.9,22,40.3,22L40.3,22z"></path>
          <path d="M47.7,11.1c-0.3,0-0.6-0.1-0.8-0.2c-0.2-0.1-0.4-0.3-0.6-0.5c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.3,0.1-0.6,0.2-0.8c0.1-0.2,0.3-0.4,0.6-0.5c0.3-0.1,0.5-0.2,0.8-0.2c0.3,0,0.6,0.1,0.8,0.2c0.2,0.1,0.4,0.3,0.6,0.5c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.1,0.5-0.2,0.8c-0.1,0.2-0.3,0.4-0.6,0.5C48.3,11,48,11.1,47.7,11.1L47.7,11.1z M46.3,21.7v-9.3h2.8v9.3H46.3z"></path>
          <path d="M55.3,22c-0.9,0-1.8-0.2-2.5-0.6c-0.7-0.4-1.3-1-1.7-1.7c-0.4-0.8-0.6-1.7-0.6-2.6c0-0.9,0.2-1.8,0.6-2.6c0.4-0.7,0.9-1.3,1.7-1.7c0.8-0.4,1.7-0.6,2.5-0.6c0.9,0,1.7,0.2,2.5,0.6c0.7,0.4,1.3,1,1.6,1.7c0.4,0.8,0.6,1.7,0.6,2.6c0,0.9-0.2,1.8-0.6,2.6c-0.4,0.7-1,1.3-1.7,1.7C57,21.8,56.1,22,55.3,22z M55.3,19.9c0.4,0,0.8-0.1,1.1-0.3c0.3-0.3,0.6-0.6,0.7-1c0.2-0.5,0.2-1,0.2-1.5c0-0.5-0.1-1-0.2-1.4c-0.1-0.4-0.3-0.7-0.6-1c-0.3-0.3-0.7-0.4-1.1-0.4c-0.4,0-0.7,0.1-1,0.3c-0.3,0.2-0.5,0.6-0.7,0.9c-0.2,0.5-0.2,1-0.2,1.5c0,0.5,0.1,1,0.2,1.5c0.1,0.4,0.3,0.7,0.7,1C54.5,19.7,54.9,19.8,55.3,19.9L55.3,19.9z"></path>
          <path d="M66.3,22c-0.9,0-1.8-0.1-2.6-0.4c-0.8-0.3-1.5-0.7-2-1.3c-0.5-0.6-0.8-1.4-0.8-2.1V18H64c0,0.3,0.1,0.7,0.3,0.9c0.2,0.3,0.5,0.4,0.9,0.5c0.4,0.1,0.8,0.2,1.2,0.2c0.5,0,1.1-0.1,1.5-0.3c0.2-0.1,0.3-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.1-0.6c0-0.2-0.1-0.5-0.2-0.6c-0.2-0.2-0.4-0.4-0.6-0.5c-0.4-0.2-0.8-0.3-1.2-0.4l-2.3-0.6c-0.6-0.1-1.1-0.4-1.6-0.8c-0.4-0.3-0.8-0.7-1-1.1c-0.2-0.5-0.3-1-0.3-1.5c0-0.8,0.2-1.5,0.7-2.1c0.5-0.6,1.1-1,1.8-1.3C64.5,9,65.4,8.9,66.2,9c0.9,0,1.7,0.1,2.5,0.4c0.7,0.2,1.3,0.7,1.7,1.2c0.4,0.6,0.7,1.3,0.7,2h-3c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.2-0.3-0.4-0.4c-0.5-0.2-1-0.4-1.5-0.3c-0.4,0-0.9,0.1-1.3,0.3c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.3,0.3,0.5,0.4c0.3,0.1,0.7,0.3,1,0.3l1.5,0.4c0.8,0.2,1.5,0.5,2.2,0.8c0.6,0.3,1,0.6,1.4,1.1c0.4,0.5,0.6,1.2,0.5,1.8c0,0.8-0.2,1.5-0.6,2.2c-0.5,0.6-1.1,1.1-1.8,1.4C68.2,21.8,67.2,22,66.3,22L66.3,22z"></path>
          <path d="M75.6,22c-0.6,0-1.2-0.1-1.7-0.3c-0.5-0.2-0.9-0.6-1.1-1c-0.3-0.5-0.4-1-0.4-1.6c0-0.5,0.1-0.9,0.3-1.3c0.2-0.4,0.5-0.7,0.9-1c1.1-0.6,2.3-0.8,3.4-0.7h1.4v-0.3c0-0.3,0-0.7-0.1-1c-0.1-0.2-0.3-0.4-0.5-0.6c-0.3-0.1-0.6-0.2-0.8-0.2c-0.4,0-0.8,0.1-1.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.3-0.1,0.4h-2.7c0-0.6,0.2-1.1,0.6-1.5c0.4-0.5,0.9-0.8,1.5-1c0.7-0.2,1.5-0.3,2.3-0.3c0.8,0,1.6,0.1,2.3,0.4c0.6,0.2,1,0.7,1.3,1.2c0.3,0.7,0.5,1.4,0.4,2.1v5.8h-2.5l-0.1-1.1c-0.3,0.4-0.6,0.8-1.1,1C76.9,21.8,76.2,22,75.6,22L75.6,22z M76.6,20c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.5-0.4,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1v-0.6h-1c-0.4,0-0.8,0-1.2,0.1c-0.3,0.1-0.5,0.2-0.7,0.4c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1-0.1,0.3-0.1,0.4c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.3,0.3,0.4C75.9,19.9,76.2,20,76.6,20L76.6,20z"></path>
          <path d="M85.5,22c-0.6,0-1.2-0.1-1.7-0.3c-0.5-0.2-0.9-0.6-1.1-1c-0.3-0.5-0.4-1-0.4-1.6c0-0.5,0.1-0.9,0.3-1.3c0.2-0.4,0.5-0.7,0.9-1c1.1-0.6,2.3-0.8,3.5-0.8h1.4v-0.3c0-0.3,0-0.7-0.1-1c-0.1-0.2-0.3-0.4-0.5-0.5c-0.3-0.1-0.6-0.2-0.8-0.2c-0.4,0-0.8,0.1-1.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.3-0.1,0.4h-2.7c0-0.6,0.2-1.1,0.6-1.5c0.4-0.5,0.9-0.8,1.5-1c0.7-0.2,1.5-0.3,2.3-0.3c0.8,0,1.6,0.1,2.3,0.4c0.6,0.2,1,0.7,1.3,1.2c0.3,0.7,0.5,1.4,0.4,2.1v5.8h-2.6l-0.1-1.1c-0.3,0.4-0.6,0.8-1.1,1C86.8,21.8,86.1,22,85.5,22L85.5,22z M86.5,20c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.5-0.4,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1v-0.6h-1c-0.4,0-0.8,0-1.2,0.1c-0.3,0.1-0.5,0.2-0.7,0.4c-0.1,0.1-0.2,0.2-0.2,0.3s-0.1,0.3-0.1,0.4c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.3,0.3,0.4C85.8,19.9,86.1,20,86.5,20L86.5,20z"></path>
          <path d="M94.7,21.7l-3-9.3h3l1.7,6.2l1.7-6.2h2.7l-3,9.3H94.7z"></path>
          <path d="M101.8,21.7v-9.3h2.7v1.3c0.3-0.5,0.7-0.9,1.2-1.1c0.5-0.3,1-0.4,1.6-0.4c0.6,0,1.2,0.1,1.8,0.4c0.5,0.3,0.9,0.7,1.1,1.2c0.3,0.6,0.4,1.3,0.4,2v6h-2.8v-5.2c0-0.6-0.1-1.2-0.4-1.7c-0.1-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.1-0.6-0.1c-0.2,0-0.5,0-0.7,0.1c-0.2,0.1-0.4,0.2-0.6,0.4c-0.3,0.5-0.5,1.1-0.4,1.7v5.1H101.8z"></path>
        </svg>
      </div>
      <div className=" flex items-center gap-4 mx-4">
        {["music", "podcasts", "Go pro"].map((item, i) => (
          <h3 className=" text-lg font-semibold capitalize">{item}</h3>
        ))}
      </div>

      <div className=" relative">
        <input
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="topnav text-xl font-lg text-zinc-300 bg-slate-600 rounded-lg h-10 w-[40vw] outline-none"
          placeholder="Search"
          type="text"
        />
        {/* <div className=" absolute w-[40vw] top-14 h-40 rounded-md bg-white overflow-hidden overflow-y-scroll">
          <div className=" w-full h-24 p-[1%] flex items-center justify-between ">
            <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1702910931756-1283e57cd28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h1 className=" whitespace-nowrap text-xl font-semibold">
              Roshan jung
            </h1>
          </div>
          <div className=" w-full h-24 p-[1%] flex items-center justify-between ">
            <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1702910931756-1283e57cd28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h1 className=" whitespace-nowrap text-xl font-semibold">
              Roshan jung
            </h1>
          </div>
          <div className=" w-full h-24 p-[1%] flex items-center justify-between ">
            <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1702910931756-1283e57cd28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h1 className=" whitespace-nowrap text-xl font-semibold">
              Roshan jung
            </h1>
          </div>
          <div className=" w-full h-24 p-[1%] flex items-center justify-between ">
            <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1702910931756-1283e57cd28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h1 className=" whitespace-nowrap text-xl font-semibold">
              Roshan jung
            </h1>
          </div>
          <div className=" w-full h-24 p-[1%] flex items-center justify-between ">
            <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
              <img
                className=" w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1702910931756-1283e57cd28c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <h1 className=" whitespace-nowrap text-xl font-semibold">
              Roshan jung
            </h1>
          </div>
        </div> */}

        {query.length && (
          <div className=" absolute w-[40vw] top-14 h-40 rounded-md bg-white overflow-hidden overflow-y-auto">
            {song &&
              song.map((items, i) => (
                <Link
                  to={`/${items.album.id}`}
                  key={i}
                  className=" w-full h-fit p-[1%] flex items-center justify-between "
                >
                  <div className="h-full w-24 bg-yellow-400 rounded-md overflow-hidden">
                    <img
                      className=" min-w-full h-full bg-cover"
                      src={items.image[2].link}
                      alt=""
                    />
                  </div>
                  <h1 className=" whitespace-nowrap text-xl font-semibold">
                    {items.name}
                  </h1>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
