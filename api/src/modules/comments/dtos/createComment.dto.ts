import { z } from "zod";

export const CreateCommentDto = z.object({
  content: z.string(),
  postId: z.string(),
});
