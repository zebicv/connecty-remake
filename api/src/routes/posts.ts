import { Application } from "express";
import { safeParse } from "../utils/safeParse";
import { createPost, getPosts } from "../modules/posts/post.controller";
import { isLoggedIn } from "../modules/auth/strategy/passport";

export function postRoutes(app: any): Application {
  app.group("/api/posts", (router: any) => {
    router.post("", isLoggedIn, safeParse(createPost));
    router.get("", isLoggedIn, safeParse(getPosts));
  });

  return app;
}
