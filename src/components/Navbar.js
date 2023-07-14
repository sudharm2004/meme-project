import React from "react";
import MEME from "./MEME.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-orange-400 text-white  p-3 shadow-md  rounded-sm flex justify-between">
      <div>
        <Link to="/">
          <img src={MEME} alt="meme logo" className="h-14 rounded-md" />
        </Link>
      </div>
      {/* <span className='text-lg font-mono flex items-center h-14 border-2 border-white p-1 w-52'>Find,Create and Share your memes</span> */}
      <div className="flex items-center">
        <Link
          to="/editmeme"
          className="px-3 py-2 border-white border-2 rounded-md text-white  font-bold inline-block cursor-pointer hover:bg-orange-500"
        >
          Create Meme
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
