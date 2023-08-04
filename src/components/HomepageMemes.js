import React from "react";
import { useEffect, useState } from "react";
import MemeItems from "./MemeItems";
import { memes_api } from "../utils/constants";

function HomepageMemes() {
  const [memes, setmemes] = useState(null);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch(memes_api);
      const responseData = await response.json();
      setmemes(responseData.data.memes);
      console.log(responseData);
      // memes.forEach(element => {
      //   console.log(element)
      // });
    };

    getMemes();
  }, []);

  return (
    <>
      {memes && (
        <div className="Memes flex flex-wrap bg-orange-50 justify-center">
          {memes.map((element) => {
            return (
              <MemeItems
                key={element.id}
                // name={element.name}
                // url={element.url}
                meme={element}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomepageMemes;
