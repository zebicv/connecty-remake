import Button from "../../ui/Button";

function CreatePost() {
  return (
    <div className="mb-4 flex basis-full items-center gap-1 md:mb-5">
      <img
        src="./src/assets/profile2.png"
        alt="Profile picture"
        className="mr-1 h-8 w-8 rounded-full sm:h-10 sm:w-10 md:h-11 md:w-11"
      />
      <div className="flex basis-full gap-2">
        <textarea
          rows="1"
          name="create_post"
          className="flex-1 resize-none rounded-full px-2 py-2 text-sm placeholder:text-xxs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:px-3 sm:py-3 sm:placeholder:text-xs md:px-4 md:py-4 md:placeholder:text-sm"
          placeholder="What's on your mind, ${USERNAME}?"
        ></textarea>
        <Button>Post</Button>
      </div>
    </div>
  );
}

export default CreatePost;
