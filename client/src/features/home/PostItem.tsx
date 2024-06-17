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
        <div className="mb-1 flex items-center md:mb-3">
          <img
            src="./src/assets/profile1.png"
            alt="Profile picture"
            className="mr-4 h-8 w-8 rounded-full object-cover md:h-10 md:w-10"
          />

          <div className="flex flex-col">
            <p className="basis-full font-bold">{username}</p>
            <p className="mt-[-3px] text-xxs md:text-xs">{date}</p>
          </div>

          <button className="ml-auto">X</button>
        </div>

        <p className="mb-2 sm:mb-2.5 md:mb-1.5">{content}</p>

        <div className="mb-2.5 flex items-center justify-between sm:mb-3 md:mb-1 md:text-sm">
          <span>5 likes</span>
          <span>2 comments</span>
        </div>

        <IconContext.Provider value={{ size: "20px" }}>
          <div className="mt-4 flex gap-2">
            <button onClick={handleLikePost}>
              <AiIcons.AiOutlineLike />
            </button>
            <button onClick={handleCommentPost}>
              <FaIcons.FaRegCommentDots />
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
