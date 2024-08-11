import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

import CommentsList from "./CommentsList";
import CreateComment from "./CreateComment";
import { createComment, deletePost, likePost } from "../../services/apiPosts";
import { formatDate } from "../../utils/helpers";

function PostItem({ post, onDeletePost }) {
  /* KADA TI VRATI CEO POST OBJEKAT KAO RESPONSE SA BACKENDA, TADA CES POZVATI setPostObject I TAKO CES PONOVO RENDEROVATI SAMO OVAJ JEDAN POST, A NE DA U HOME COMPOMNENTU UPDATE-UJES CEO POSTS ARRAY, JER BI TO DOVELO DO RENDEROVANJA SVIH POSTOVA PONOVO */
  // const [postObject, setPostObject] = useState(post);

  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [commentsOnPost, setCommentsOnPost] = useState(() =>
    post.comments ? post.comments : [],
  );
  console.log(commentsOnPost);
  console.log(post);

  const {
    id: postId,
    content,
    createdAt,
    authorId: postAuthorId,
    likes,
    comments,
  } = post;

  const currentUserId: string | null = localStorage
    .getItem("currentUser")
    ?.split(";")[0];

  const formattedDate = formatDate(createdAt);

  const handleLikePost = () => {
    likePost(postId, postAuthorId);
  };

  const handleDeletePost = () => {
    onDeletePost(postId);
    deletePost(postId);
  };

  const handleCommentPost = () => {
    setIsCommentVisible((currState) => !currState);
  };

  const handleCreateComment = async (content: string) => {
    const newComment = await createComment(content, postId);
    console.log(newComment);

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
              {postAuthorId}
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

        <div className="mb-2.5 flex cursor-pointer items-center justify-between text-xs font-medium text-slate-400 sm:mb-3 sm:text-sm md:mb-1 md:text-sm">
          <span>{likes} likes</span>
          <span>{commentsOnPost && commentsOnPost?.length} comments</span>
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

        {isCommentVisible && (
          <CreateComment
            postId={postId}
            handleCreateComment={handleCreateComment}
          />
        )}
      </div>

      {commentsOnPost && (
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
