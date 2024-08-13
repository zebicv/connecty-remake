import { useState } from "react";

function CreatePost({ handleCreatePost }) {
  const [content, setContent] = useState("");

  const currentUser = localStorage.getItem("currentUser")?.split(";")[1];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;

    handleCreatePost(content);
    setContent("");
  };

  return (
    <div className="mb-4 flex basis-full items-center gap-1 md:mb-5">
      <img
        src="./src/assets/profile2.png"
        alt="Profile picture"
        className="mr-1 h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10 md:h-11 md:w-11"
      />
      <form className="flex basis-full gap-2" onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          rows="1"
          name="create_post"
          className="flex-1 resize-none rounded-full px-2 py-2 text-xs placeholder:text-xxs placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:px-3 sm:py-3 sm:text-sm sm:placeholder:text-xs md:px-4 md:py-4 md:placeholder:text-sm"
          placeholder={`What's on your mind, ${currentUser}?`}
        ></textarea>
        <button
          className="rounded-lg bg-yellow-400 px-2.5 py-2.5 font-semibold tracking-tight text-stone-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:px-4 sm:py-3 sm:text-sm"
          type="submit"
        >
          Post
        </button>
        {/* <Button>Post</Button> */}
      </form>
    </div>
  );
}

export default CreatePost;
