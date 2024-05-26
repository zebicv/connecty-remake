import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import { errorHandler } from "./middlewares/errorHandler";
import { userRoutes } from "./routes/userRoutes";
import { authRoutes } from "./routes/auth";

dotenv.config();
const app = express();
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
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 1, sameSite: "lax" }, // 1 day expiration
  })
);
app.use(passport.initialize());
app.use(passport.session());
import "./modules/auth/strategy/passport";

const PORT = process.env.PORT || 3000;

authRoutes(app);
userRoutes(app);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}...`);
});
export default app;
