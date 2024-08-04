import { Application } from "express";
import { isLoggedIn } from "../modules/auth/strategy/passport";
import { safeParse } from "../utils/safeParse";
import {
  createComment,
  deleteComment,
} from "../modules/comments/comments.controller";

export function commentsRoutes(app: any): Application {
  app.group("/api/comments", (router: any) => {
    router.post("", isLoggedIn, safeParse(createComment));
    router.delete("/:id", isLoggedIn, safeParse(deleteComment));
  });

  return app;
}
