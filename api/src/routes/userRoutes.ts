import { Application } from "express";

require("express-group-routes");

export function userRoutes(app: any): Application {
  app.group("/api/users", (router: any) => {
    // all user routes goes here
  });
  return app;
}
