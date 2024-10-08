import { GiPlayButton } from "react-icons/gi";
import { IconContext } from "react-icons";

import { useState } from "react";

function CreateComment({ postId, handleCreateComment }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;

    handleCreateComment(content);
    setContent("");
  };

  return (
    <form className="mt-6 flex items-center" onSubmit={handleSubmit}>
      <img
        src="./src/assets/profile2.png"
        alt="Profile picture"
        className="mr-1 h-8 w-8 rounded-full sm:h-10 sm:w-10 md:h-6 md:w-6"
      />
      <textarea
        className="basis-full resize-none rounded-full bg-gray-100 px-3 pt-1  leading-5 placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        <IconContext.Provider value={{ size: "32px", color: "rgb(234 179 8)" }}>
          <GiPlayButton />
        </IconContext.Provider>
      </button>
    </form>
  );
}

export default CreateComment;
