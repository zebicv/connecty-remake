import { Application } from "express";
import { safeParse } from "../utils/safeParse";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPosts,
  likePost,
  updatePost,
} from "../modules/posts/post.controller";
import { isLoggedIn } from "../modules/auth/strategy/passport";

export function postRoutes(app: any): Application {
  app.group("/api/posts", (router: any) => {
    router.post("", isLoggedIn, safeParse(createPost));
    router.get("", isLoggedIn, safeParse(getPosts));
    router.get("/all", isLoggedIn, safeParse(getAllPosts));
    router.put("/:id", isLoggedIn, safeParse(updatePost));
    router.delete("/:id", isLoggedIn, safeParse(deletePost));
    router.post("/:id", isLoggedIn, safeParse(likePost));
  });

  return app;
}
