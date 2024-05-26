import { z } from "zod";

export const RegisterDto = z
  .object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords did not match.",
      });
    }
  });
