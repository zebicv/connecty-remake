import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";
import { RegisterDto } from "./dtos/register.dto";
import { AppError } from "../../utils/AppError";
import { HTTPResponses } from "../../constants/HTTPResponse";
import { HTTPStatusCode } from "../../constants/HTTPStatusCode";
import { hashPassword } from "../../utils/helperFunctions";
import RESTResponse from "../../utils/RESTResponse";

const prisma: PrismaClient = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const payload = req.body;

  // Validation
  const validatedPayload = RegisterDto.safeParse(payload);
  if (!validatedPayload.success) throw validatedPayload.error;

  const user: User | null = await prisma.user.findUnique({
    where: {
      email: validatedPayload.data.email,
    },
  });

  // If user exists, throw an error (cannot register existing user)
  if (user) {
    throw new AppError(HTTPResponses.USER_EXIST, HTTPStatusCode.USER_EXIST);
  }

  // hashing the password
  const hashedPassword: string = await hashPassword(
    validatedPayload.data.password
  );

  // creating the user
  const newUser: User | null = await prisma.user.create({
    data: {
      email: validatedPayload.data.email,
      username: validatedPayload.data.email,
      password: hashedPassword,
    },
  });

  return res
    .status(201)
    .send(
      RESTResponse.createResponse(true, HTTPResponses.OK, { data: newUser })
    );
};

export const login = async (req: Request, res: Response) => {
  const session = req.session;
  return res
    .status(201)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, { session }));
};
