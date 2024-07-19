import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CreatePostDto } from "./dtos/createPost.dto";
import { HTTPStatusCode } from "../../constants/HTTPStatusCode";
import RESTResponse from "../../utils/RESTResponse";
import { HTTPResponses } from "../../constants/HTTPResponse";
import { AppError } from "../../utils/AppError";
import { IUserSession } from "../../types/user.type";

const prisma: PrismaClient = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.user as IUserSession;
  const validatedPayload = CreatePostDto.safeParse(payload);

  if (!id)
    throw new AppError(HTTPResponses.INVALID_USER, HTTPStatusCode.UNAUTHORIZED);
  if (!validatedPayload.success) throw validatedPayload.error;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user)
    throw new AppError(
      HTTPResponses.USER_DOES_NOT_EXIST,
      HTTPStatusCode.UNAUTHORIZED
    );

  const post = await prisma.post.create({
    data: {
      content: validatedPayload.data.content,
      authorId: user.id,
    },
  });

  return res
    .status(HTTPStatusCode.CREATED)
    .send(RESTResponse.createResponse(true, HTTPResponses.CREATED, { post }));
};

// :postid
export const getPost = async (req: Request, res: Response) => {};

// get all posts for user
export const getPosts = async (req: Request, res: Response) => {
  const { id } = req.user as IUserSession;

  if (!id)
    throw new AppError(HTTPResponses.INVALID_USER, HTTPStatusCode.UNAUTHORIZED);

  const posts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
  });

  return res
    .status(HTTPStatusCode.OK)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, { posts }));
};

// get all posts generally
export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  return res
    .status(HTTPStatusCode.OK)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, { posts }));
};

// PUT :postid
export const updatePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  const validatedPayload = CreatePostDto.safeParse(payload);

  if (!validatedPayload.success) throw validatedPayload.error;

  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      content: validatedPayload.data.content,
    },
  });

  return res
    .status(HTTPStatusCode.NO_CONTENT)
    .send(RESTResponse.createResponse(true, HTTPResponses.NO_CONTENT, {}));
};

// DELETE :postid
export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;

  await prisma.post.delete({
    where: {
      id,
    },
  });
  return res
    .status(HTTPStatusCode.OK)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, {}));
};

// GET :postid
export const likePost = async (req: Request, res: Response) => {};
