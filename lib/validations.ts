import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(4, "username cannot be smaller then 4 char")
    .max(13, "username cannot be larger than 13 char"),
  password: z.string().min(3, "Password cannot be smaller than 3 character"),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, "Password cannot be smaller than 3 character"),
});
