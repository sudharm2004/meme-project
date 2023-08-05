import React from "react";
import { meme_image_base_url } from "../utils/constants";
import { useInputContext } from "../utils/inputContext";
const EditingImage = ({ imgId }) => {
  const { inputList } = useInputContext();
  return (
    <div className="editing-image border-2 relative  w-[490px]">
      <img
        src={meme_image_base_url + imgId + ".jpg"}
        alt="meme"
        className="meme-img w-full"
      />
      {inputList.map((element, index) => {
        return (
          <div
            id={element.id}
            className="w-1/2 translate-y-1/2 h-16 border-4 absolute bottom-1/2 right-1/2 translate-x-1/2 border-red-500"
          >
            {inputList[index].text}
          </div>
        );
      })}
    </div>
  );
};

export default EditingImage;
