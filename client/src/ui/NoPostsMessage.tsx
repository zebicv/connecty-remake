function NoPostsMessage({ searchedPosts, posts }) {
  console.log("Searched posts length:", searchedPosts.length);
  console.log("All posts length:", posts.length);

  const isEqual = searchedPosts.length === posts.length;

  return (
    <div>
      <p className="text-base font-bold text-yellow-500 sm:text-xl md:text-2xl">
        {isEqual
          ? "No posts to show. Feel free to post something! 😀"
          : "No posts match search query. Please try again!"}
      </p>
    </div>
  );
}

export default NoPostsMessage;
