import { NextFunction, Request, Response } from "express";
import RESTResponse from "../utils/RESTResponse";
import { HTTPResponses } from "../constants/HTTPResponse";
import { HTTPStatusCode } from "../constants/HTTPStatusCode";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name === "ZodError") {
    return res
      .status(HTTPStatusCode.BAD_REQUEST)
      .send(RESTResponse.createResponse(false, HTTPResponses.INVALID_DATA, {}));
  }

  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .send(RESTResponse.createResponse(false, error.message, {}));
  }

  return res
    .status(HTTPStatusCode.INTERNAL_SERVER_ERROR)
    .send(
      RESTResponse.createResponse(
        false,
        HTTPResponses.INTERNAL_SERVER_ERROR,
        {}
      )
    );
};
