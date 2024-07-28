import { Request, Response } from "express";
import { HTTPStatusCode } from "../../constants/HTTPStatusCode";
import RESTResponse from "../../utils/RESTResponse";
import { HTTPResponses } from "../../constants/HTTPResponse";
import { CreateCommentDto } from "./dtos/createComment.dto";
import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/AppError";

const prisma: PrismaClient = new PrismaClient();

export const createComment = async (req: Request, res: Response) => {
  const payload = req.body;
  const validatedPayload = CreateCommentDto.safeParse(payload);
  if (!validatedPayload.success) throw validatedPayload.error;

  const comment = await prisma.comment.create({
    data: {
      content: validatedPayload.data.content,
      postId: validatedPayload.data.postId,
      userId: validatedPayload.data.authorId,
    },
  });
  return res
    .send(HTTPStatusCode.CREATED)
    .send(
      RESTResponse.createResponse(true, HTTPResponses.CREATED, { comment })
    );
};

export const getAllComments = async (req: Request, res: Response) => {};
