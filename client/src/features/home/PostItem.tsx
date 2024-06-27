import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";

function PostItem({ post, comments }) {
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const handleLikePost = () => {};

  const handleCommentPost = () => {
    setIsCommentVisible((currState) => !currState);
  };

  const { id, username, content, date, likesNumber, commentsNumber } = post;

  return (
    <li className="mb-5 basis-full sm:mb-6">
      <div className="mb-3 rounded-lg bg-white px-4 py-4 sm:px-6 sm:py-6 md:px-6 md:py-6">
        <div className="mb-2 flex items-center md:mb-3">
          <img
            src="./src/assets/profile1.png"
            alt="Profile picture"
            className="mr-2 h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
          />

          <div className="flex flex-col">
            <p className="basis-full text-[13px] font-bold sm:text-sm">
              {username}
            </p>
            <p className="mt-[-1px] text-xxs text-slate-400 sm:text-xs md:text-xs">
              {date}
            </p>
          </div>

          <IconContext.Provider value={{ size: "16px" }}>
            <button className="ml-auto">
              <AiIcons.AiOutlineClose />
            </button>
          </IconContext.Provider>
        </div>

        <p className="mb-2 text-xs font-medium sm:mb-2.5 sm:text-sm md:mb-1.5">
          {content}
        </p>

        <div className="mb-2.5 flex cursor-pointer items-center justify-between text-xs font-medium text-slate-400 sm:mb-3 sm:text-sm md:mb-1 md:text-sm">
          <span>5 likes</span>
          <span>2 comments</span>
        </div>

        <IconContext.Provider value={{ size: "20px" }}>
          <div className="mt-4 flex justify-between gap-6 font-medium sm:text-sm">
            <button
              onClick={handleLikePost}
              className="flex items-center justify-center gap-0.5"
            >
              <AiIcons.AiOutlineLike />
              <span>Like</span>
            </button>
            <button
              onClick={handleCommentPost}
              className="flex items-center justify-center gap-0.5"
            >
              <FaIcons.FaRegComment />
              <span>Comment</span>
            </button>
          </div>
        </IconContext.Provider>

        {isCommentVisible && <CreateComment />}
      </div>

      <ul>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </li>
  );
}

export default PostItem;
