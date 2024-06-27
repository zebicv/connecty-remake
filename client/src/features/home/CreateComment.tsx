import { GiPlayButton } from "react-icons/gi";
import { IconContext } from "react-icons";

import { useState } from "react";

function CreateComment() {
  function handleCreateComment(e) {
    console.log(e.target.value);
  }

  return (
    <div className="mt-6 flex items-center">
      <img
        src="./src/assets/profile2.png"
        alt="Profile picture"
        className="mr-1 h-8 w-8 rounded-full sm:h-10 sm:w-10 md:h-6 md:w-6"
      />
      <textarea
        className="basis-full resize-none rounded-lg bg-gray-100 placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        placeholder={`Comment as USERNAME`}
        onChange={handleCreateComment}
      />
      <button>
        <IconContext.Provider value={{ size: "28px", color: "rgb(234 179 8)" }}>
          <GiPlayButton />
        </IconContext.Provider>
      </button>
    </div>
  );
}

export default CreateComment;
