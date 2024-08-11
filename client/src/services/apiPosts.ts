export const getAllPosts = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/posts/all", {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    // console.log(data);
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

    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (postId: string, authorId: string) => {
  try {
    const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ authorId }),
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const createComment = async (content: string, id: string) => {
  try {
    const response = await fetch("http://localhost:8080/api/comments", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content, postId: id }),
    });

    const data = await response.json();
    const newComment = data.data.comment;
    return newComment;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:8080/api/comments/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};
