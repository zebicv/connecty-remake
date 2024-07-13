import { useOutletContext } from "react-router-dom";

import PostItem from "./PostItem";
import CreatePost from "./CreatePost";

const posts = [
  {
    id: 1,
    username: "Marko Simic",
    content: "Vanja je legenda najveca",
    date: "February 21st, 2023 09:46pm",
    likesNumber: 4,
    commentsNumber: 2,
  },
  {
    id: 2,
    username: "Boris Antonijev",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    date: "February 21st 09:46pm",
    likesNumber: 4,
    commentsNumber: 2,
  },
];

const comments = [
  {
    id: 1,
    postId: 1,
    content:
      "KOMENTAR 1 - Lorem ipsum dolor y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    username: "Boris",
    date: "December 9th, 2023 07:11am",
  },
  {
    id: 2,
    postId: 1,
    content:
      "KOMENTAR 2 Lorem ipsum dolor y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    username: "Iva",
    date: "December 11th, 2024 17:11am",
  },
  {
    id: 3,
    postId: 2,
    content:
      "KOMENTAR 3 Lorem ipsum dolor y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    username: "Marko",
    date: "December 11th, 2024 17:11am",
  },
];

function Home() {
  const [searchQuery, setSearchQuery] = useOutletContext();

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.username} ${post.content}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  return (
    <main className="mx-auto mt-11 flex max-w-[95%] flex-wrap items-center justify-center pb-24 text-xs sm:max-w-xl sm:text-sm md:max-w-2xl md:text-sm">
      <CreatePost />

      <ul className="divide-y divide-stone-200">
        {searchedPosts.map((post) => (
          <PostItem key={post.id} post={post} comments={comments} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
