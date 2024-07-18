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
    .status(HTTPStatusCode.OK)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, { post }));
};

// :postid
export const getPost = async (req: Request, res: Response) => {};

export const getPosts = async (req: Request, res: Response) => {};

// :postid PUT
export const updatePost = async (req: Request, res: Response) => {};

// :postid DELETE
export const deletePost = async (req: Request, res: Response) => {};
