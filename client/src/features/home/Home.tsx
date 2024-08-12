import { useOutletContext } from "react-router-dom";

import PostsList from "./PostsList";
import CreatePost from "./CreatePost";
import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../../services/apiPosts";
import { sortNewest } from "../../utils/helpers";
import NoPostsMessage from "../../ui/NoPostsMessage";

function Home() {
  const [searchQuery, setSearchQuery] = useOutletContext();
  const [posts, setPosts] = useState([]);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.content}`.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : posts;

  useEffect(() => {
    const loadPosts = async () => {
      const initalPosts = await getAllPosts();
      const sortedPosts = sortNewest(initalPosts);
      setPosts(sortedPosts);
    };
    loadPosts();
  }, []);

  const handleCreatePost = async (content: string) => {
    try {
      const newPost = await createPost(content);

      setPosts((curPosts) => {
        const updatedPosts = [...curPosts, newPost];
        const sortedPosts = sortNewest(updatedPosts);

        return sortedPosts;
      });
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

      {posts.length > 0 ? (
        <PostsList
          searchedPosts={searchedPosts}
          handleDeletePost={handleDeletePost}
        />
      ) : (
        <NoPostsMessage />
      )}
    </main>
  );
}

export default Home;
