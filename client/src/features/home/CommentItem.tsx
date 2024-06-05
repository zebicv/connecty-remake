function CommentItem({ comment }) {
  console.log(comment);

  const { content, id, postId, username, date } = comment;

  return (
    <li className="mb-2 flex gap-x-2 sm:gap-x-4 md:mb-2.5 md:gap-x-6">
      <img
        src="./src/assets/profile2.png"
        alt="Profile picture"
        className="mr-4 h-8 w-8 rounded-full md:h-10 md:w-10"
      />

      <div className="rounded-lg bg-white px-3 py-3 md:px-3 md:py-4">
        <div className="mb-1 flex items-center">
          <div className="flex flex-col">
            <p className="basis-full font-bold">{username}</p>
            <p className="mt-[-3px] text-xxs">{date}</p>
          </div>

          <span className="ml-auto">X</span>
        </div>

        <p>{content}</p>
      </div>
    </li>
  );
}

export default CommentItem;
