import * as AiIcons from "react-icons/ai";

function CommentItem({ comment }) {
  const { content, id, postId, username, date } = comment;

  return (
    <li className="mb-2 flex gap-x-0.5 pl-3 sm:gap-x-2 md:mb-2.5 md:gap-x-2">
      <div className="w-20 pt-3">
        <img
          src="./src/assets/profile2.png"
          alt="Profile picture"
          className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
        />
      </div>

      <div className="rounded-lg bg-white px-3 py-3 text-xs md:px-3 md:py-4">
        <div className="mb-1 flex items-center">
          <div className="flex flex-col">
            <p className="basis-full text-[13px] font-bold sm:text-sm">
              {username}
            </p>
            <p className="mt-[-2px] text-xxs text-slate-400 sm:text-xs">
              {date}
            </p>
          </div>

          <button className="ml-auto">
            <AiIcons.AiOutlineClose />
          </button>
        </div>

        <p className="text-xs font-medium sm:text-sm">{content}</p>
      </div>
    </li>
  );
}

export default CommentItem;
