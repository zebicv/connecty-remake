import { z } from "zod";

export const LikePostDto = z.object({
  authorId: z.string(),
});
