import { useLoaderData, useOutletContext } from "react-router-dom";

import PostsList from "./PostsList";
import CreatePost from "./CreatePost";
import { useState } from "react";
import { getAllPosts, createPost } from "../../services/apiPosts";
import { sortNewest } from "../../utils/helpers";
import NoPostsMessage from "../../ui/NoPostsMessage";

function Home() {
  const initialPosts = useLoaderData();
  const [searchQuery, setSearchQuery] = useOutletContext();
  const [posts, setPosts] = useState(initialPosts);

  console.log(searchQuery);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.content}`.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : posts;

  const handleCreatePost = async (content: string) => {
    try {
      const newPost = await createPost(content);

      setPosts((curPosts) => {
        const updatedPosts = [...curPosts, newPost];
        const sortedPosts = sortNewest(updatedPosts);

        return sortedPosts;
      });

      setSearchQuery("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter((postItem) => postItem.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <main className="mx-auto mt-11 flex max-w-[95%] flex-wrap items-center justify-center pb-24 text-xs sm:max-w-xl sm:text-sm md:max-w-2xl md:text-sm">
      <CreatePost handleCreatePost={handleCreatePost} />

      {searchedPosts.length > 0 ? (
        <PostsList
          searchedPosts={searchedPosts}
          handleDeletePost={handleDeletePost}
        />
      ) : (
        <NoPostsMessage searchedPosts={searchedPosts} posts={posts} />
      )}
    </main>
  );
}

export async function loader() {
  const initalPosts = await getAllPosts();
  const sortedPosts = sortNewest(initalPosts);
  return sortedPosts;
}

export default Home;
