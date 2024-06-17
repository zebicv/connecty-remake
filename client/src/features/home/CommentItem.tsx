function CommentItem({ comment }) {
  const { content, id, postId, username, date } = comment;

  return (
    <li className="mb-2 flex gap-x-2 pl-3 sm:gap-x-2 md:mb-2.5 md:gap-x-2">
      <div className="w-20 pt-3">
        <img
          src="./src/assets/profile2.png"
          alt="Profile picture"
          className="h-7 w-7 rounded-full object-cover sm:h-10 sm:w-10"
        />
      </div>

      <div className="rounded-lg bg-white px-3 py-3 md:px-3 md:py-4">
        <div className="mb-1 flex items-center">
          <div className="flex flex-col">
            <p className="basis-full font-bold">{username}</p>
            <p className="mt-[-3px] text-xxs">{date}</p>
          </div>

          <button className="ml-auto">X</button>
        </div>

        <p>{content}</p>
      </div>
    </li>
  );
}

export default CommentItem;
