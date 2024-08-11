import { useOutletContext } from "react-router-dom";

import PostItem from "./PostItem";
import CreatePost from "./CreatePost";
import { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../../services/apiPosts";
import { sortNewest } from "../../utils/helpers";

function Home() {
  const [searchQuery, setSearchQuery] = useOutletContext();
  const [posts, setPosts] = useState([]);
  console.log(posts);

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
      console.log(newPost);

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

      <ul className="grow divide-y divide-stone-200">
        {searchedPosts.map((post) => (
          <PostItem key={post.id} post={post} onDeletePost={handleDeletePost} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
