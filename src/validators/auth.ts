import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password should be atleast 6 characters")
    .optional(),
});
