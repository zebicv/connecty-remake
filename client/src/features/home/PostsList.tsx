import PostItem from "./PostItem";

function PostsList({ searchedPosts, handleDeletePost }) {
  return (
    <ul className="grow divide-y divide-stone-200">
      {searchedPosts.map((post) => (
        <PostItem key={post.id} post={post} onDeletePost={handleDeletePost} />
      ))}
    </ul>
  );
}

export default PostsList;
