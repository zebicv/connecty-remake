import CommentItem from "./CommentItem";

function CommentsList({ commentsOnPost, handleDeleteComment, postAuthorId }) {
  return (
    <ul>
      {commentsOnPost.map((commItem) => (
        <CommentItem
          key={commItem.id}
          comment={commItem}
          handleDeleteComment={handleDeleteComment}
          postAuthorId={postAuthorId}
        />
      ))}
    </ul>
  );
}

export default CommentsList;
