import { z } from "zod";

export const CreatePostDto = z.object({
  content: z.string(),
});
