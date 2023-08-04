import React from "react";
import { Link } from "react-router-dom";

function MemeItems(props) {
  const { meme } = props;

  //defining the dimension so that all images look good
  const style =
    meme.width > meme.height ? { width: "150px" } : { height: "150px" };

  //getting the id of meme template
  // console.log(meme.url);
  const imgId = meme.url.slice(22).slice(0, -4);

  return (
    <Link to={"/editmeme/" + imgId} className="link-hover m-4">
      <div className=" flex flex-col items-center w-[220px]  h-full border-slate-500   border-2 rounded-md  ">
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

export default MemeItems;
