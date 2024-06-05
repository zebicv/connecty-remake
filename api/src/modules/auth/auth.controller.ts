import { PrismaClient, Profile, User } from "@prisma/client";
import { Request, Response } from "express";
import { RegisterDto } from "./dtos/register.dto";
import { AppError } from "../../utils/AppError";
import { HTTPResponses } from "../../constants/HTTPResponse";
import { HTTPStatusCode } from "../../constants/HTTPStatusCode";
import { hashPassword } from "../../utils/helperFunctions";
import RESTResponse from "../../utils/RESTResponse";
import fileUpload from "express-fileupload";
import { handleProfilePicture } from "../../utils/fileSystem/profilePicture";

const prisma: PrismaClient = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const payload = req.body;
  const image: fileUpload.FileArray | null | undefined = req.files;

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

  try {
    await prisma.$transaction(async (prisma) => {
      // creating the user
      const newUser: User | null = await prisma.user.create({
        data: {
          email: validatedPayload.data.email,
          username: validatedPayload.data.username,
          password: hashedPassword,
        },
      });

      const profilePicture = handleProfilePicture(image, newUser.id);

      await prisma.profile.create({
        data: {
          bio: validatedPayload.data.bio,
          profilePicture: profilePicture,
          userId: newUser.id,
        },
      });
    });
    return res
      .status(201)
      .send(RESTResponse.createResponse(true, HTTPResponses.OK, {}));
  } catch (error) {
    console.log("Transaction failed: ", error);
    return res
      .status(500)
      .send(
        RESTResponse.createResponse(
          false,
          HTTPResponses.INTERNAL_SERVER_ERROR,
          { error }
        )
      );
  } finally {
    await prisma.$disconnect();
  }
};

export const login = async (req: Request, res: Response) => {
  const session = req.session;
  return res
    .status(201)
    .send(RESTResponse.createResponse(true, HTTPResponses.OK, { session }));
};

export const logout = async (req: Request, res: Response) => {
  req.logout((error) => {
    if (error)
      return res
        .status(401)
        .send(
          RESTResponse.createResponse(false, HTTPResponses.BAD_REQUEST, {})
        );
    return res
      .status(201)
      .send(RESTResponse.createResponse(true, HTTPResponses.OK, {}));
  });
};
