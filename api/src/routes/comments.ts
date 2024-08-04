import { Application } from "express";
import { isLoggedIn } from "../modules/auth/strategy/passport";
import { safeParse } from "../utils/safeParse";
import { createComment } from "../modules/comments/comments.controller";

export function commentsRoutes(app: any): Application {
  app.group("/api/comments", (router: any) => {
    router.post("", isLoggedIn, safeParse(createComment));
  });

  return app;
}
