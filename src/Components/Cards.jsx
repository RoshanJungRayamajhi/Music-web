import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const [SelectedCard, setSelectedCard] = useState(null);

  return (
    <div className=" cards my-4 flex gap-8 overflow-hidden overflow-x-scroll text-white">
      {data &&
        data.map((album, index) => (
          <Link
            key={index}
            to={`/${album.id}`}
            className="card  min-w-48 flex flex-col justify-start overflow-hidden rounded-none "
          >
            <div className="w-full min-h-36 overflow-hidden">
              <img
                className=" w-full h-full object-cover rounded-t-md"
                src={album.image[2].link}
                alt="Hindi Hit Songs"
              />
            </div>
            <h1 className=" text-base font-semibold whitespace-nowrap">
              {album.name || album.title}
            </h1>
            <p>{album.subtitle}</p>
          </Link>
        ))}
    </div>
  );
};

export default Cards;
