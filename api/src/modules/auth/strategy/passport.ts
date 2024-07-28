import passport, { use } from "passport";
import { Strategy } from "passport-local";
import * as bcrypt from "bcrypt";
import { Role, User } from "@prisma/client";
import prisma from "../../../database/client";
import { HTTPResponses } from "../../../constants/HTTPResponse";
import { DeserializedUser } from "../dtos/deserializedUser.dto";
import { NextFunction, Request, Response } from "express";
import RESTResponse from "../../../utils/RESTResponse";
import { HTTPStatusCode } from "../../../constants/HTTPStatusCode";

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return done(HTTPResponses.INVALID_USER);
    const passMatch = await bcrypt.compare(password, user.password);

    if (!passMatch) return done(HTTPResponses.INVALID_USER);
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, (user as User).id);
});

passport.deserializeUser(async (id: string, done) => {
  const payload = await prisma.user.findUnique({ where: { id } });
  if (!payload) return done("No user to deserialize");
  const user: DeserializedUser = {
    id: payload.id,
    email: payload.email,
    username: payload.username,
  };
  return done(null, user);
});

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.path === "/api/v1/login" || req.path === "/api/v1/register") {
    return next();
  }

  if (req.isAuthenticated()) return next();

  return res
    .status(HTTPStatusCode.UNAUTHORIZED)
    .send(RESTResponse.createResponse(false, HTTPResponses.UNAUTHORIZED, {}));
};
