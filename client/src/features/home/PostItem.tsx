import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

import CommentsList from "./CommentsList";
import CreateComment from "./CreateComment";
import { createComment, deletePost, likePost } from "../../services/apiPosts";
import { formatDate } from "../../utils/helpers";

function PostItem({ post, onDeletePost }) {
  const [postObject, setPostObject] = useState(post);
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [commentsOnPost, setCommentsOnPost] = useState(() =>
    post.comments ? post.comments : [],
  );

  console.log(postObject);

  const {
    id: postId,
    content,
    createdAt,
    authorId: postAuthorId,
    likes,
    comments,
    author,
  } = postObject;

  const currentUserId: string | null = localStorage
    .getItem("currentUser")
    ?.split(";")[0];

  const formattedDate = formatDate(createdAt);

  const handleLikePost = async () => {
    const updatedPost = await likePost(postId, postAuthorId);
    setPostObject(updatedPost);
  };

  const handleDeletePost = () => {
    onDeletePost(postId);
    deletePost(postId);
  };

  const handleShowCommentPost = (e) => {
    setIsCommentVisible((currState) => !currState);
    console.log(e.target);
  };

  const handleCreateComment = async (content: string) => {
    const newComment = await createComment(content, postId);

    setCommentsOnPost((currState) => {
      return [...currState, newComment];
    });
  };

  const handleDeleteComment = (id: string) => {
    const updatedCommentsOnPost = commentsOnPost.filter(
      (commentItem) => commentItem.id !== id,
    );
    setCommentsOnPost(updatedCommentsOnPost);
  };

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
              {author?.username}
            </p>
            <p className="mt-[-1px] text-xxs text-slate-400 sm:text-xs md:text-xs">
              {formattedDate}
            </p>
          </div>

          {currentUserId === postAuthorId && (
            <IconContext.Provider value={{ size: "16px" }}>
              <button className="ml-auto" onClick={handleDeletePost}>
                <AiIcons.AiOutlineClose />
              </button>
            </IconContext.Provider>
          )}
        </div>

        <p className="mb-2 text-xs font-medium sm:mb-2.5 sm:text-sm md:mb-1.5">
          {content}
        </p>

        <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-slate-400 sm:mb-3 sm:text-sm md:mb-1 md:text-sm">
          <span>{likes} likes</span>
          <span>{commentsOnPost && commentsOnPost?.length} comments</span>
        </div>

        <IconContext.Provider value={{ size: "20px" }}>
          <div className="mt-4 flex justify-between gap-6 font-medium sm:text-sm">
            <button
              onClick={handleLikePost}
              className="flex items-center justify-center gap-0.5 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-slate-200"
            >
              <AiIcons.AiOutlineLike />
              <span>Like</span>
            </button>
            <button
              onClick={handleShowCommentPost}
              className="flex items-center justify-center gap-0.5 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-slate-200"
            >
              <FaIcons.FaRegComment />
              <span>Comment</span>
            </button>
          </div>
        </IconContext.Provider>

        {isCommentVisible && (
          <CreateComment
            postId={postId}
            handleCreateComment={handleCreateComment}
          />
        )}
      </div>

      {commentsOnPost && isCommentVisible && (
        <CommentsList
          commentsOnPost={commentsOnPost}
          handleDeleteComment={handleDeleteComment}
          postAuthorId={postAuthorId}
        />
      )}
    </li>
  );
}

export default PostItem;
