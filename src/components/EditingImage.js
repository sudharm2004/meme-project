import React from "react";
import { meme_image_base_url } from "../utils/constants";

const EditingImage = ({ imgId }) => {
  return (
    <div className="editing-image border-2  w-[490px]">
      <img
        src={meme_image_base_url + imgId + ".jpg"}
        alt="meme"
        className="meme-img w-full"
      />
    </div>
  );
};

export default EditingImage;
