import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import RedisStore from "connect-redis";
import fileUpload from "express-fileupload";
import { createClient } from "redis";
import { errorHandler } from "./middlewares/errorHandler";
import { userRoutes } from "./routes/userRoutes";
import { authRoutes } from "./routes/auth";

dotenv.config();
// const express1 = require("express");
const app = express();

// Use CORS middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let redisClient = createClient({ url: "redis://localhost:6379" });
redisClient.connect().catch(console.error);

app.use(
  session({
    name: "session",
    secret: process.env.SESSION_SECRET!,
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 1,
      sameSite: "lax",
      httpOnly: true,
    }, // 1 day expiration
  })
);
app.use(passport.initialize());
app.use(passport.session());

import "./modules/auth/strategy/passport";
import { postRoutes } from "./routes/posts";
import { commentsRoutes } from "./routes/comments";

const PORT = process.env.PORT || 3000;

app.use(fileUpload());

authRoutes(app);
userRoutes(app);
postRoutes(app);
commentsRoutes(app);

// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

app.get("/api", (req, res) => {
  res.json("Hello");
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}...`);
});
export default app;
