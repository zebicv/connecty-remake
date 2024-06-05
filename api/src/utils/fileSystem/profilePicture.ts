import path from "path";
import fs from "fs";
import { AppError } from "../AppError";
import { HTTPResponses } from "../../constants/HTTPResponse";
import { HTTPStatusCode } from "../../constants/HTTPStatusCode";

export function handleProfilePicture(image: any, userId: string): string {
  let filePath: any;
  const rootPath: string = process.env.UPLOAD_ROOT_PATH_PROFILE!;
  if (!image) return path.join(rootPath, "avatar.webp");
  Object.keys(image).forEach((key) => {
    filePath = path.join(rootPath, userId);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    filePath = path.join(filePath, image[key].name);
    image[key].mv(filePath, (err: any) => {
      if (err) {
        console.log(err);
        throw new AppError(
          HTTPResponses.BAD_REQUEST,
          HTTPStatusCode.BAD_REQUEST
        );
      }
    });
  });
  return filePath;
}
