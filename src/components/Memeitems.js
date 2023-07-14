import React from "react";
import { Link } from "react-router-dom";

function Memeitems(props) {
  const { meme } = props;
  const style =
    meme.width > meme.height ? { width: "150px" } : { height: "150px" };
  return (
    <Link to="/editmeme" className="link-hover m-4">
      <div className=" flex flex-col items-center w-[180px]  h-full border-slate-500   border-2 rounded-md  ">
        <h1 className="font-bold text-[14px] my-3 flex-grow">{meme.name}</h1>
        <img
          className=" my-3 flex-grow"
          src={meme.url}
          alt="memenotfound"
          style={style}
        />
      </div>
    </Link>
  );
}

export default Memeitems;
