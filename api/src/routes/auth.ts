import { Application, Request, Response } from "express";
import { safeParse } from "../utils/safeParse";
import { login, logout, register } from "../modules/auth/auth.controller";
import passport from "passport";

export function authRoutes(app: any): Application {
  app.group("/api", (router: any) => {
    router.post("/register", safeParse(register));
    router.post("/login", passport.authenticate("local"), safeParse(login));

    router.group("/auth", (subRouter: any) => {
      subRouter.post("/logout", (req: Request, res: Response) => {
        logout(req, res);
      });
    });
  });

  return app;
}
