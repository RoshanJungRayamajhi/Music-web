import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-20 left-0 h-[80vh] w-[18%] p-[3%] border-r-2 border-red-200">
      <div className="browser flex flex-col gap-2">
        <h2 className="text-xl font-semibold my-4">Browse</h2>
        {[
          "New Releases",
          "Top Charts",
          "Top Playlists",
          "Podcasts",
          "Top Artists",
          "Radio",
        ].map((item, i) => (
          <h3 className=" text-lg hover:bg-purple-400 hover:text-white duration-300 rounded-md px-3 py-2">
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
