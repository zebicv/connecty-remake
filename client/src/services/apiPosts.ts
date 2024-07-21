export const getAllPosts = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/posts/all", {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    const posts = data.data.posts;
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (content: string) => {
  try {
    const response = await fetch("http://localhost:8080/api/posts", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const data = await response.json();
    const newPost = data.data.post;
    return newPost;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
