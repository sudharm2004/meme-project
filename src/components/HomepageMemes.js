import React from "react";
import { useEffect, useState } from "react";
import Memeitems from "./Memeitems";

function HomepageMemes() {
  const [memes, setmemes] = useState(null);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const responseData = await response.json();
      setmemes(responseData.data.memes);
      // console.log(memes)
      // memes.forEach(element => {
      //   console.log(element)
      // });
    };

    getMemes();
  }, []);

  return (
    <>
      {memes && (
        <div className="Memes flex flex-wrap bg-orange-50">
          {memes.map((element) => {
            return (
              <Memeitems
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
